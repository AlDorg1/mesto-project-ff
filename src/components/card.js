// Функция создания карточки
export function createCard(cardData, handleDelete, handleLike, handleImageClick) {
    const cardTemplate = document.querySelector("#card-template");
    const cardElement = cardTemplate.content
      .querySelector(".places__item")
      .cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__delete-button");
    const likeButton = cardElement.querySelector(".card__like-button");
  
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
  
    deleteButton.addEventListener("click", function () {
      handleDelete(cardElement);
    });
    
    likeButton.addEventListener("click", function() {
      handleLike(likeButton);
    });
    
    cardImage.addEventListener('click', function () {
      handleImageClick(cardData.link, cardData.name);
    });
  
    return cardElement;
  }
  
  // Функция удаления карточки
  export function handleDelete(card) {
    card.remove();
  }
  
  // Функция лайка карточки
  export function handleLike(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
  }