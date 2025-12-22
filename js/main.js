document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('a.btn');
  if(links.length===0)return;
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
  const isHidden=document.hidden;
  if(isHidden){
    document.documentElement.setAttribute('data-page-hidden','true');
  } else {
    document.documentElement.removeAttribute('data-page-hidden');
  }
});
// Ensure attribute state is correct on load
if(document.hidden) document.documentElement.setAttribute('data-page-hidden','true');
