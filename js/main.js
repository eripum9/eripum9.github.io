document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('a.btn');
  links.forEach(a=>{a.addEventListener('click',e=>{
    const href=a.getAttribute('href');
    if(href && href.startsWith('../')){
      e.preventDefault();
      alert('This link points to local repo files. Clone the repo and run locally to use it.');
    }
  })})
});

// Pause rotor when page is hidden (copied from logo.svg script)
document.addEventListener('visibilitychange', function(){
  if(document.hidden){
    document.documentElement.setAttribute('data-page-hidden','true');
  } else {
    document.documentElement.removeAttribute('data-page-hidden');
  }
});
// Ensure attribute state is correct on load
if(document.hidden) document.documentElement.setAttribute('data-page-hidden','true');

// Toggle rotation on the topbar logo. Keeps logosmall.svg untouched.
function updateTopbarRotation(){
  const img=document.querySelector('.topbar-logo');
  if(!img) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hidden = document.hidden;
  if(!prefersReduced && !hidden){
    img.classList.add('rotating');
  } else {
    img.classList.remove('rotating');
  }
}
// rotation removed: no topbar rotation script per user request

// Prevent right-click/save on the topbar logo image
document.addEventListener('DOMContentLoaded', ()=>{
  const img = document.querySelector('.topbar-logo');
  if(!img) return;
  img.addEventListener('contextmenu', (e)=>{ e.preventDefault(); });
  // also disable dragstart to make saving harder via drag
  img.addEventListener('dragstart', (e)=>{ e.preventDefault(); });
});
