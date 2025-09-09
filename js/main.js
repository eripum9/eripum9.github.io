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
