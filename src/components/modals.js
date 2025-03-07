//по клику esc
export function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_is-opened');
      if (popupOpened) {
        closeModal(popupOpened);
      }
    }
  }
  
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
  
  export function setupPopupCloseListeners(popups) {
    popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
          closeModal(popup);
        }
      });
    });
  }
  
  export function setupAnimation(popups) {
    popups.forEach((popup) => {
      popup.classList.add('popup_is-animated');
    });
  }