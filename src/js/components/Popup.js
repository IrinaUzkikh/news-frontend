export default class Popup {
  constructor(popupContainer) {
    this.popupContainer = popupContainer;
  }

  open() {
    this.popupContainer.classList.add('popup_is-opened');
    for (let i = 0; i < this.popupContainer.querySelectorAll('.popup__error').length; i++) {
      this.popupContainer.querySelectorAll('.popup__error')[i].textContent = '';
    }
    for (let i = 0; i < this.popupContainer.querySelectorAll('input').length - 1; i++) {
      this.popupContainer.querySelectorAll('input')[i].value = '';
    }
  }

  close() {
    this.popupContainer.classList.remove('popup_is-opened');
    for (let i = 0; i < this.popupContainer.querySelectorAll('.popup__error').length; i++) {
      this.popupContainer.querySelectorAll('.popup__error')[i].textContent = '';
    }
    for (let i = 0; i < this.popupContainer.querySelectorAll('input').length - 1; i++) {
      this.popupContainer.querySelectorAll('input')[i].value = '';
    }
  }
}
