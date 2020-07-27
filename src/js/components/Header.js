import {
  buttonAuthorization, vectorMain, savedArticles, vectorArticles, logout,
  buttonAuthorizationMobil, menuArticles, menuLogout,
} from '../constants/constantsForElementSelectors';

export default class Header {
  headerAutorization() {
    buttonAuthorization.classList.remove('header__text_is-opened');
    vectorMain.classList.remove('header__vector_is-opened');
    savedArticles.classList.add('header__text_is-opened');
    vectorArticles.classList.add('header__vector_is-opened');
    logout.classList.add('header__text_is-opened');
  }

  headerStart() {
    buttonAuthorization.classList.add('header__text_is-opened');
    vectorMain.classList.add('header__vector_is-opened');
    savedArticles.classList.remove('header__text_is-opened');
    vectorArticles.classList.remove('header__vector_is-opened');
    logout.classList.remove('header__text_is-opened');
  }

  headerMobilAutorization() {
    buttonAuthorizationMobil.classList.remove('header__text_is-opened');
    menuArticles.classList.add('header__text_is-opened');
    menuLogout.classList.add('header__text_is-opened');
  }

  headerMobilStart() {
    buttonAuthorizationMobil.classList.add('header__text_is-opened');
    menuArticles.classList.remove('header__text_is-opened');
    menuLogout.classList.remove('header__text_is-opened');
  }
}
