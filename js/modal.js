const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');
const overlay = document.querySelector('.popup__overlay');


const openButtons = document.querySelectorAll(
  '.hero__button, .menu__access-btn'
);


function openPopup() {
  popup.classList.remove('_hidden');
}


function closePopup() {
  popup.classList.add('_hidden');
}


openButtons.forEach((btn) => {
  btn.addEventListener('click', openPopup);
});


closeBtn.addEventListener('click', closePopup);


overlay.addEventListener('click', closePopup);