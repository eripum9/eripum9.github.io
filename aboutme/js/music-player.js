/* Music Player */
(function () {
  'use strict';

  var audio = new Audio();
  // lightweight preloader for the next track
  var preloadAudio = new Audio();
  preloadAudio.preload = 'auto';
  var preloadedIndex = -1;

  var playlist = [];
  var currentIndex = -1;
  var isPlaying = false;

  var elPlayer   = document.getElementById('music-player');
  var elThumb    = document.getElementById('mp-thumb');
  var elTitle    = document.getElementById('mp-title');
  var elArtist   = document.getElementById('mp-artist');
  var elPlay     = document.getElementById('mp-play');
  var elPrev     = document.getElementById('mp-prev');
  var elNext     = document.getElementById('mp-next');
  var elStop     = document.getElementById('mp-stop');
  var elBar      = document.getElementById('mp-progress-bar');
  var elProgress = document.getElementById('mp-progress');
  var iconPlay   = elPlay.querySelector('.mp-icon-play');
  var iconPause  = elPlay.querySelector('.mp-icon-pause');

  var MUSIC_DIR = 'assets/music/';

  function preloadTrack(index) {
    if (!Array.isArray(playlist) || playlist.length === 0) return;
    var idx = ((index % playlist.length) + playlist.length) % playlist.length;
    if (preloadedIndex === idx) return; // already preloaded
    var track = playlist[idx];
    if (!track || !track.file) return;
    var src = MUSIC_DIR + track.file;
    try {
      preloadAudio.src = src;
      preloadAudio.preload = 'auto';
      // start loading into browser cache
      preloadAudio.load();
      preloadedIndex = idx;
    } catch (e) {
      // ignore preload errors silently
    }
  }

  function loadPlaylist() {
    fetch(MUSIC_DIR + 'playlist.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        // Support two playlist formats:
        // 1) Array of track objects (new): [ { file, title, artist, thumbnail, link }, ... ]
        // 2) Object with `tracks` array (legacy): { tracks: [ ... ] }
        if (Array.isArray(data)) {
          playlist = data;
        } else if (data && Array.isArray(data.tracks)) {
          playlist = data.tracks;
        } else {
          playlist = [];
        }
        if (playlist.length > 0) {
          elPlayer.style.display = '';
          // do not autoplay on page load
          loadTrack(0, false);
        } else {
          elPlayer.style.display = 'none';
        }
      })
      .catch(function () {
        elPlayer.style.display = 'none';
      });
  }

  function loadTrack(index, autoplay) {
    if (index < 0 || index >= playlist.length) return;
    currentIndex = index;
    var track = playlist[currentIndex];

    audio.src = MUSIC_DIR + track.file;
    // Title may optionally link to an external track URL
    elTitle.innerHTML = '';
    if (track.link) {
      var a = document.createElement('a');
      a.href = track.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = track.title || 'Unknown';
      a.style.color = 'inherit';
      elTitle.appendChild(a);
    } else {
      elTitle.textContent = track.title || 'Unknown';
    }
    elArtist.textContent = track.artist || '';
    elProgress.style.width = '0%';

    // Thumbnail handling: prefer explicit `thumbnail` field, otherwise try png/jpg/jpeg
    var baseName = track.file.replace(/\.[^.]+$/, '');
    var candidates = [];
    if (track.thumbnail) {
      candidates.push(track.thumbnail);
    } else {
      candidates.push(baseName + '.png', baseName + '.jpg', baseName + '.jpeg');
    }

    var tryIdx = 0;
    function tryThumb() {
      if (tryIdx >= candidates.length) {
        // use a tiny transparent fallback instead of an empty src (avoids loading the document
        // as an image on some browsers and prevents huge native-size rendering)
        var transparent1x1 = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        elThumb.onerror = null;
        elThumb.onload = null;
        elThumb.src = transparent1x1;
        return;
      }
      var candidate = candidates[tryIdx++];
      var src = /^(https?:|\/)/.test(candidate) ? candidate : MUSIC_DIR + candidate;
      elThumb.onerror = tryThumb;
      elThumb.onload = function () { elThumb.onerror = null; elThumb.onload = null; };
      elThumb.src = src;
    }
    tryThumb();

    if (autoplay) {
      audio.play();
      setPlaying(true);
    } else {
      setPlaying(false);
    }

    // Preload the following track to make transitions faster
    preloadTrack(index + 1);
  }

  function setPlaying(state) {
    isPlaying = state;
    iconPlay.style.display = state ? 'none' : '';
    iconPause.style.display = state ? '' : 'none';
  }

  elPlay.addEventListener('click', function () {
    if (playlist.length === 0) return;
    if (isPlaying) {
      audio.pause();
      setPlaying(false);
    } else {
      if (currentIndex < 0) loadTrack(0, true);
      else audio.play();
      setPlaying(true);
    }
  });

  elStop.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
    elProgress.style.width = '0%';
  });

  elNext.addEventListener('click', function () {
    if (playlist.length === 0) return;
    var next = (currentIndex + 1) % playlist.length;
    loadTrack(next, true);
  });

  elPrev.addEventListener('click', function () {
    if (playlist.length === 0) return;
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      var prev = (currentIndex - 1 + playlist.length) % playlist.length;
      loadTrack(prev, true);
    }
  });

  audio.addEventListener('timeupdate', function () {
    if (audio.duration) {
      elProgress.style.width = (audio.currentTime / audio.duration * 100) + '%';
    }
  });

  audio.addEventListener('ended', function () {
    var next = (currentIndex + 1) % playlist.length;
    loadTrack(next, true);
  });

  elBar.addEventListener('click', function (e) {
    if (!audio.duration) return;
    var rect = elBar.getBoundingClientRect();
    var ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  });

  elPlayer.style.display = 'none';
  loadPlaylist();
})();
