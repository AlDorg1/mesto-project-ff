// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template");

// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(cardData, handleDelete) {
  const cardElement = cardTemplate.content
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  deleteButton.addEventListener("click", function () {
    handleDelete(cardElement);
  });

  return cardElement;
}

// @todo: Функция удаления карточки
function handleDelete(card) {
  card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const card = createCard(item, handleDelete);
  cardsContainer.append(card);
});
