const popup = document.querySelector('._customer-popup');
const popupForm = document.querySelector('._customer-popup__form');

const openBtn = document.querySelector('._customer-call__button_open-form');
const closeBtn = document.querySelector('._customer-popup__button-close');


function openPopup() {
  popup.classList.add('_customer-popup_opened');
};

function closePopup() {
    popup.classList.remove('_customer-popup_opened');
};

function handleFormSubmit (event) {
  
  event.preventDefault();
  closePopup();
};


openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);