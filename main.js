const navShow = () => {
  const burger = document.querySelector('.burger');
  const nav =document.querySelector('.navbar__top__list');
  const links= document.querySelectorAll('.navbar__top__list li');

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');

    links.forEach((link, index)=>{
if (link.style.animation) {
  link.style.animation = '';
}else{
   
  } link.style.animation = 'linksFade 0.5s ease forwards ${index / 5 +  0.2}s';

    });
  });
}

navShow();