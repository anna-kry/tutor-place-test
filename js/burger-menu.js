const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const closeMenu = document.querySelector('.header__close');


if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open');
  });
}

if (burger && menu) {
  closeMenu.addEventListener('click', () => {
    menu.classList.toggle('header__menu--open');
  });
}

