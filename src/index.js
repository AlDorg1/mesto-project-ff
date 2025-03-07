import './pages/index.css';
import { initialCards } from './cards.js';
import { openModal, closeModal, setupPopupCloseListeners, setupAnimation } from './components/modals.js';
import { createCard, handleDelete, handleLike } from './components/card.js';
const popupAdd = document.querySelector(".popup_type_new-card");
const buttonAdd = document.querySelector(".profile__add-button");
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const formEdit = document.querySelector('.popup__form[name="edit-profile"]');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_url');
const cardsContainer = document.querySelector('.places__list');
const formAdd = document.querySelector('.popup__form[name="new-place"]');
const popupImage = document.querySelector('.popup_type_image');
const imageOfPopup = document.querySelector('.popup__image');
const captionOfPopup = document.querySelector('.popup__caption');
const popups = document.querySelectorAll('.popup');

function init() {
  setupPopupCloseListeners(popups);
  setupAnimation(popups);
}
init();

// Темплейт карточки
const cardTemplate = document.querySelector("#card-template");

// Вывести карточки на страницу
initialCards.forEach(function (item) {
  const card = createCard(item, handleDelete, handleLike, handleImageClick);
  cardsContainer.append(card);
});


buttonAdd.addEventListener('click', function () {
  openModal(popupAdd);
});



buttonEdit.addEventListener('click', function () {
  openModal(popupEdit);
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
});


formEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  closeModal(popupEdit);
});

formAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Получаем данные из полей формы
  const cardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  };

  // Создаем новую карточку и добавляем в контейнер
  const newCard = createCard(cardData, handleDelete, handleLike, handleImageClick);
  cardsContainer.prepend(newCard); // добавляем в начало списка

  // Закрываем попап и сбрасываем форму
  closeModal(popupAdd);
  formAdd.reset();
});

function handleImageClick(link, name) {
  imageOfPopup.src = link;
  imageOfPopup.alt = name;
  captionOfPopup.textContent = name;
  openModal(popupImage);
}
