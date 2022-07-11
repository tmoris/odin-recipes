const menuToggle = document.querySelector('.brand__menu');
const links = document.querySelectorAll('.navlist__item--link');
menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

Links.forEach(link =>{
  link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  } ) ;