(() => {
  'use strict';

  const credible = ['Establishing secure connection','Verifying system integrity','Downloading encrypted manifest','Resolving dependencies','Migrating critical records','Validating recovery checkpoints','Synchronizing distributed services','Applying security policies','Rebuilding search indexes','Performing final verification','Reconciling database replicas','Validating cryptographic signatures','Rotating service credentials','Optimizing storage allocation','Replicating continuity snapshots'];
  const absurd = ['Compressing photons','Reassuring the database','Untangling cables remotely','Asking the cloud nicely','Rotating encryption pigeons','Calibrating gravity','Locating the Any key','Feeding the server hamsters','Installing additional patience','Verifying Steve’s innocence','Negotiating with the final one percent','Moving temporary files somewhere more permanent','Alphabetizing the blockchain','Warming up the cold storage','Converting coffee into uptime','Waiting for DNS to feel ready','Polishing the loading bar','Counting every other byte'];
  const recoveries = ['Final verification failed. Retrying.','A dependency changed during installation.','Recalculating completion estimate.','Synchronizing one remaining item.','Integrity check returned an unusually interesting result.','Applying a critical last-minute patch.','The server requested a brief moment.','Progress value was too optimistic. Correcting.'];
  const titles = ['Almost done…','Still almost done…','Please do not close this tab','This is definitely progressing'];
  const $ = (selector) => document.querySelector(selector);
  const ui = { fill: $('#progress-fill'), value: $('#progress-value'), bar: $('[role="progressbar"]'), message: $('#operation-message'), log: $('#activity-log'), elapsed: $('#elapsed'), estimate: $('#estimate'), connection: $('#connection'), status: $('#system-status'), cancel: $('#cancel'), about: $('#about'), panel: $('#about-panel'), diagnostics: $('#diagnostics'), toast: $('#toast-region'), backdrop: $('#dialog-backdrop'), dialogTitle: $('#dialog-title'), dialogCopy: $('#dialog-copy'), dialogAction: $('#dialog-action') };
  const state = { progress: 0, seconds: 0, reversals: 0, absurdity: 0, stopped: false, timers: new Set(), lastFocus: null };
  const pick = (items) => items[Math.floor(Math.random() * items.length)];
  const later = (fn, delay) => { const id = window.setTimeout(() => { state.timers.delete(id); if (!state.stopped) fn(); }, delay); state.timers.add(id); return id; };
  const stamp = () => new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  function addLog(message, type = '') {
    const item = document.createElement('li');
    if (type) item.dataset.type = type;
    const time = document.createElement('time'); time.dateTime = new Date().toISOString(); time.textContent = stamp();
    item.append(time, document.createTextNode(message)); ui.log.prepend(item);
    while (ui.log.children.length > 18) ui.log.lastElementChild.remove();
  }
  function renderProgress() {
    const safe = Math.min(99.4, Math.max(0, state.progress));
    state.progress = safe; ui.fill.style.width = `${safe}%`; ui.value.textContent = `${safe.toFixed(1)}%`;
    ui.bar.setAttribute('aria-valuenow', safe.toFixed(1));
  }
  function nextMessage() {
    state.absurdity = Math.min(0.72, state.seconds / 240);
    const message = Math.random() < state.absurdity ? pick(absurd) : pick(credible);
    ui.message.textContent = message; addLog(message);
  }
  function progressTick() {
    const roll = Math.random(); let delta;
    if (state.progress > 98.2 && roll < .32) {
      const recovery = pick(recoveries); state.progress -= 5 + Math.random() * 13; ui.message.textContent = recovery; addLog(recovery, 'warning'); toast('Recovery protocol', recovery);
    } else if (roll < .12) delta = -(0.15 + Math.random() * 1.8);
    else if (roll < .28) delta = 0;
    else if (roll > .93) delta = 1.6 + Math.random() * 4.2;
    else delta = .18 + Math.random() * 1.1;
    if (delta !== undefined) state.progress += delta * (state.progress > 90 ? .16 : state.progress > 70 ? .48 : 1);
    renderProgress();
    if (Math.random() < .42) nextMessage();
    later(progressTick, 1500 + Math.random() * (state.progress > 90 ? 4200 : 2600));
  }
  function updateClock() {
    state.seconds += 1; const h = String(Math.floor(state.seconds / 3600)).padStart(2,'0'); const m = String(Math.floor(state.seconds % 3600 / 60)).padStart(2,'0'); const s = String(state.seconds % 60).padStart(2,'0');
    ui.elapsed.textContent = `${h}:${m}:${s}`;
    if (state.seconds % 7 === 0) ui.estimate.textContent = pick(['About 2 minutes','Less than a minute','Calculating…','Approximately soon','47 seconds']);
    later(updateClock, 1000);
  }
  function toast(title, copy, duration = 4800) {
    const node = document.createElement('div'); node.className = 'toast'; node.setAttribute('role','status');
    const strong = document.createElement('strong'); strong.textContent = title; node.append(strong, document.createTextNode(copy)); ui.toast.append(node);
    while (ui.toast.children.length > 3) ui.toast.firstElementChild.remove(); later(() => node.remove(), duration);
  }
  function showDialog(title, copy, action = 'Continue safely') {
    state.lastFocus = document.activeElement; ui.dialogTitle.textContent = title; ui.dialogCopy.textContent = copy; ui.dialogAction.textContent = action; ui.backdrop.hidden = false; ui.dialogAction.focus();
  }
  function closeDialog() { ui.backdrop.hidden = true; state.lastFocus?.focus(); }
  function randomEvent() {
    const event = Math.floor(Math.random() * 7);
    if (event === 0) { showDialog('Permission requested','The migration would like permission to access the concept of Thursday. No personal data is required.','Grant conceptual access'); later(closeDialog, 6500); }
    if (event === 1) { ui.estimate.textContent = '6 years, 4 months'; toast('Estimate updated','Minor scheduling adjustment detected.'); later(() => ui.estimate.textContent = 'About 1 minute', 6500); }
    if (event === 2) { ui.connection.textContent = 'Disconnected'; ui.status.textContent = 'Reconnecting'; addLog('Service endpoint temporarily wandered off.'); later(() => { ui.connection.textContent = 'Encrypted · Stable'; ui.status.textContent = 'Operation active'; addLog('Service endpoint returned with a note.'); }, 4200); }
    if (event === 3) { ui.diagnostics.classList.add('anomaly'); $('#cpu').textContent='Concerned'; $('#ram').textContent='Present'; $('#gpu').textContent='Thinking'; $('#coffee').textContent='Critically low'; later(() => { ui.diagnostics.classList.remove('anomaly'); $('#cpu').textContent='Nominal'; $('#ram').textContent='Available'; $('#gpu').textContent='Idle'; $('#coffee').textContent='Adequate'; }, 8000); }
    if (event === 4) { toast('Achievement unlocked', pick(['Waited professionally','Observed measurable progress','Did not restart the router','Demonstrated enterprise patience'])); }
    if (event === 5) { document.body.classList.add('emergency'); ui.status.textContent='Emergency optimization'; addLog('Emergency optimization mode engaged.'); later(() => { document.body.classList.remove('emergency'); ui.status.textContent='Operation active'; addLog('Emergency successfully downgraded to concern.'); }, 6000); }
    if (event === 6) { state.progress = Math.max(2,state.progress - 3); renderProgress(); addLog('Progress direction inverted for load balancing.'); toast('Bidirectional progress','Backward movement is forward movement in another coordinate system.'); }
    document.title = pick(titles); later(randomEvent, 14000 + Math.random() * 26000);
  }
  function fakeCancel() {
    const choice = Math.floor(Math.random() * 5);
    if (choice === 0) toast('Request accepted','Cancellation request queued behind the operation.');
    if (choice === 1) { ui.cancel.textContent='Cancel cancellation'; toast('Cancellation in progress','Please cancel the cancellation to continue cancelling.'); later(() => ui.cancel.textContent='Cancel operation',7000); }
    if (choice === 2) showDialog('Confirm cancellation','Cancelling now may cause several carefully organized bytes to become emotionally unavailable.','Keep bytes organized');
    if (choice === 3) { state.progress=Math.max(0,state.progress-4); renderProgress(); ui.message.textContent='Undoing cancellation'; addLog('Undoing cancellation.'); }
    if (choice === 4) { ui.status.textContent='Cancelling…'; ui.message.textContent='Restoring cancelled operation'; toast('Cancellation complete','Restoring cancelled operation now.'); later(() => ui.status.textContent='Operation active',4500); }
  }
  function cleanup() { state.stopped = true; state.timers.forEach(clearTimeout); state.timers.clear(); }

  ui.cancel.addEventListener('click', fakeCancel);
  ui.about.addEventListener('click', () => { const opening = ui.panel.hidden; ui.panel.hidden = !opening; ui.about.setAttribute('aria-expanded', String(opening)); if (opening) ui.panel.focus?.(); });
  ui.dialogAction.addEventListener('click', closeDialog);
  ui.backdrop.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeDialog(); if (event.key === 'Tab') { event.preventDefault(); ui.dialogAction.focus(); } });
  window.addEventListener('pagehide', cleanup, { once: true });
  addLog('Secure operations console initialized.'); renderProgress(); later(progressTick, 900); later(updateClock, 1000); later(randomEvent, 10000 + Math.random() * 10000);
})();
