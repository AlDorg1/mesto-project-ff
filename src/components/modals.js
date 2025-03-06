//по клику esc
export function handleEscClose (evt) {
    if ((evt.key === 'Escape') && (document.querySelector('.popup_is-opened'))) { 
    const popupOpened = document.querySelector('.popup_is-opened');
    closeModal(popupOpened) } }
  
  //открытие попапа
  export function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscClose);
  }
  
  //закрытие попапа
  export function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscClose);
  }
  
  export function setupPopupCloseListeners() {
    // Находим все попапы на странице
    const popups = document.querySelectorAll('.popup');
    
    // Для каждого попапа добавляем обработчик события
    popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
        // Проверяем, что клик был по оверлею (самому попапу) или по кнопке закрытия
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
          closeModal(popup);
        }
      });
    });
  }
  
  export function setupAnimation() {
    const popups = document.querySelectorAll('.popup');
    
    popups.forEach((popup) => {
      popup.classList.add('popup_is-animated');
    });
  }