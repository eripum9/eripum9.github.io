(function(){
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const key = 'site-theme';
  function broadcastTheme(t){
    // Notify iframes (same-origin) about theme change
    document.querySelectorAll('iframe').forEach(f => {
      try{ f.contentWindow.postMessage({type:'set-theme', theme: t}, '*'); } catch(e){}
    });
  }

  function applyTheme(theme){
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      toggle && toggle.setAttribute('aria-pressed','true');
    } else {
      root.removeAttribute('data-theme');
      toggle && toggle.setAttribute('aria-pressed','false');
    }
    // also broadcast to any embedded iframes
    broadcastTheme(theme);
  }
  const stored = localStorage.getItem(key);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark? 'dark':'light'));
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(key,next);
    });
  }
})();
