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
document.addEventListener('DOMContentLoaded', updateTopbarRotation);
document.addEventListener('visibilitychange', updateTopbarRotation);
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', updateTopbarRotation);
