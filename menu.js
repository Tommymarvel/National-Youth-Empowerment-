const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu');
const closeMenu = document.getElementById('closemenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});