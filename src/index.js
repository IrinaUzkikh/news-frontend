import './css/index.css';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import UserApi from './js/api/UserApi';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';

import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';
import { dateForApiFromNewDate, dateForCardsFromApi, dateForApiFromCards } from './js/utils/functionsСonvertingDates';

const apiKey = 'ce2d4e553e614a3fa2ef645ac1fac3ed';
const pageSize = 7;
const newsApiUrl = 'https://newsapi.org/v2/everything';
// const newsApiUrl = 'https://praktikum.tk/news/v2/everything';

const newsCard = new NewsCard();
const newsCardList = new NewsCardList(document.querySelector('.results__container'), newsCard);
const popupRegistration = new Popup(document.querySelector('#popup-registration'));
const popupLogin = new Popup(document.querySelector('#popup-login'));
const popupResult = new Popup(document.querySelector('#popup-result'));
const formValidator = new FormValidator();

const dateTo = dateForApiFromNewDate(new Date());
const dateFrom = dateForApiFromNewDate(new Date(new Date() - 1000 * 60 * 60 * 24 * 7));

const URL = 'http://localhost:3000';
// const URL = 'http://newsnine.ga';

const userApi = new UserApi({
  baseUrl: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const mainApi = new MainApi({
  baseUrl: URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

const buttonAuthorization = document.querySelector('#button-authorization');

const popupRegistrationClose = document.querySelector('#registration-close');
const popupLoginClose = document.querySelector('#login-close');
const popupResultClose = document.querySelector('#result-close');

const login = document.querySelector('#login');
const loginRegistration = document.querySelector('#login-registration');
const register = document.querySelector('#register');

const nameUser = document.querySelector('#nameUser');
const nameUserMobil = document.querySelector('#nameUserMobil');

const vectorMain = document.querySelector('#vector-main');
const vectorArticles = document.querySelector('#vector-articles');
const savedArticles = document.querySelector('#saved-articles');
const logout = document.querySelector('#logout');
const processPreloader = document.querySelector('#processPreloader');
const nothingFound = document.querySelector('#nothingFound');
const requestNewsApiError = document.querySelector('#requestNewsApiError');
const results = document.querySelector('.results');
const resultsContainer = document.querySelector('.results__container');
const resultsButton = document.querySelector('.results__button');
const headerMenuMobil = document.querySelector('#headerMenuMobil');
const menuMobil = document.querySelector('#menuMobil');
const buttonAuthorizationMobil = document.querySelector('#buttonAuthorizationMobil');
const menuArticles = document.querySelector('#menuArticles');
const menuLogout = document.querySelector('#menuLogout');
const menuMobilClose = document.querySelector('#menuMobilClose');

const { searchForm, registrationForm, loginForm } = document.forms;
// слушатели для мобильного меню

headerMenuMobil.addEventListener('click', () => {
  menuMobil.classList.add('menu_is-opened');
  if (!localStorage.getItem('name')) {
    buttonAuthorizationMobil.classList.add('header__text_is-opened');
    menuArticles.classList.remove('header__text_is-opened');
    menuLogout.classList.remove('header__text_is-opened');
  } else {
    buttonAuthorizationMobil.classList.remove('header__text_is-opened');
    menuArticles.classList.add('header__text_is-opened');
    menuLogout.classList.add('header__text_is-opened');
  }
});

menuMobilClose.addEventListener('click', () => {
  menuMobil.classList.remove('menu_is-opened');
});

buttonAuthorizationMobil.addEventListener('click', () => {
  menuMobil.classList.remove('menu_is-opened');
  popupLogin.open();
});

menuLogout.addEventListener('click', () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    menuMobil.classList.remove('menu_is-opened');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
});

// слушатели валидации полей ввода
document.querySelector('#email_login').addEventListener('input', formValidator.setEventListeners.bind(formValidator));
document.querySelector('#password_login').addEventListener('input', formValidator.setEventListeners.bind(formValidator));
document.querySelector('#email_reg').addEventListener('input', formValidator.setEventListeners.bind(formValidator));
document.querySelector('#password_reg').addEventListener('input', formValidator.setEventListeners.bind(formValidator));
document.querySelector('#name_reg').addEventListener('input', formValidator.setEventListeners.bind(formValidator));
document.querySelector('.search__text').addEventListener('input', () => {
  document.querySelector('.search__error').classList.remove('search__error_is-opened');
});

// функция, которая при загрузке запускает прелоудер или открывает сообщения"

function renderLoading(isLoading, element) {
  if (isLoading) {
    element.classList.add('process_is-opened');
  } else {
    element.classList.remove('process_is-opened');
  }
}

// слушатели иконки "сохранить"

document.querySelector('.results__container').addEventListener('mouseover', (event) => {
  const eventElement = event.target;
  if (eventElement.classList.contains('card__bookmark') && !localStorage.getItem('name')) {
    eventElement.closest('.card').querySelector('.card__button').classList.add('card__button_is-opened');
    eventElement.style.backgroundImage = 'url(./images/icon-black.png)';
  }
});

document.querySelector('.results__container').addEventListener('mouseout', (event) => {
  const eventElement = event.target;
  if (eventElement.classList.contains('card__bookmark') && !localStorage.getItem('name')) {
    eventElement.closest('.card').querySelector('.card__button').classList.remove('card__button_is-opened');
    eventElement.style.backgroundImage = 'url(./images/icon-gray.png)';
  }
});

// загрузка статей с NewsApi

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  results.classList.remove('results_is-opened');
  const cards = resultsContainer.querySelectorAll('.card');
  cards.forEach((item) => {
    resultsContainer.removeChild(item);
  });
  renderLoading(false, nothingFound);
  renderLoading(false, requestNewsApiError);

  const newsTopic = searchForm.elements.newsTopic.value;
  if (newsTopic.length === 0) {
    document.querySelector('.search__error').classList.add('search__error_is-opened');
  } else {
    const newsApi = new NewsApi(
      {
        dateTo, dateFrom, apiKey, pageSize, newsApiUrl, newsTopic,
      },
    );
    renderLoading(true, processPreloader);
    newsApi.getNews.bind(newsApi)()
      .then((data) => {
        const arrArticles = data.articles.map((object) => {
          const {
            title,
            description: text,
            publishedAt: dateApi,
            urlToImage: image,
            url: link,
          } = object;
          const source = object.source.name;
          const keyword = newsTopic;
          const bookmark = 'url(./images/icon-gray.png)';
          const page = 'home';
          const date = dateForCardsFromApi(dateApi);
          return {
            keyword, title, text, date, source, link, image, bookmark, page,
          };
        });
        const arrArticlesLength = arrArticles.length;
        if (arrArticlesLength === 0) {
          renderLoading(false, processPreloader);
          renderLoading(true, nothingFound);
        } else {
          resultsButton.classList.remove('results__button_is-closed');
          renderLoading(false, processPreloader);
          results.classList.add('results_is-opened');
          const arr = arrArticles.slice(0, 3);
          newsCardList.render.bind(newsCardList)(arr);
          if (arrArticlesLength < 4) {
            resultsButton.classList.add('results__button_is-closed');
          } else {
            let startArr = 3;
            let endArr = 6;
            resultsButton.addEventListener('click', () => {
              if (startArr <= arrArticlesLength) {
                const array = arrArticles.slice(startArr, endArr);
                newsCardList.render.bind(newsCardList)(array);
                startArr += 3;
                endArr += 3;
                if (startArr > arrArticlesLength) { resultsButton.classList.add('results__button_is-closed'); }
              }
            });
          }
        }
        searchForm.elements.newsTopic.value = '';
      })
      .catch((err) => {
        renderLoading(false, processPreloader);
        renderLoading(true, requestNewsApiError);
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }
});

// слушатель добавления карточки

document.querySelector('.results__container').addEventListener('click', (event) => {
  if (event.target.classList.contains('card__bookmark') && localStorage.getItem('name')) {
    const newCard = event.target.closest('.card');
    const keyword = `${newCard.querySelector('.card__keyword').textContent}`;
    const title = `${newCard.querySelector('.card__title').textContent}`;
    const text = `${newCard.querySelector('.card__text').textContent}`;
    const dateCard = `${newCard.querySelector('.card__date').textContent}`;
    const source = `${newCard.querySelector('.card__source').textContent}`;
    const link = `${newCard.querySelector('.card__link').href}`;
    const image = `${newCard.querySelector('.card__image').style.backgroundImage.slice(5, -2)}`;
    const date = dateForApiFromCards(dateCard);
    mainApi.createArticle.bind(mainApi)(keyword, title, text, date, source, link, image)
      .then(() => {
        const eventElement = event.target;
        eventElement.style.backgroundImage = 'url(./images/icon-blue.png)';
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }
});
// слушатель открытия попапа логина пользователя
login.addEventListener('click', () => {
  popupRegistration.close();
  popupLogin.open();
});

// слушатель закрытия попапа пользователя
popupLoginClose.addEventListener('click', () => {
  popupLogin.close();
});
// слушатель закрытия попапа Успешно зарегистрирован
popupResultClose.addEventListener('click', () => {
  popupResult.close();
});
// logout пользователя

logout.addEventListener('click', () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    buttonAuthorization.classList.add('header__text_is-opened');
    vectorMain.classList.add('header__vector_is-opened');
    savedArticles.classList.remove('header__text_is-opened');
    vectorArticles.classList.remove('header__vector_is-opened');
    logout.classList.remove('header__text_is-opened');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
});

// login пользователя

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailLogin = loginForm.elements.email_login.value;
  const passwordLogin = loginForm.elements.password_login.value;
  loginForm.elements.email_login.value = '';
  loginForm.elements.password_login.value = '';
  userApi.signIn.bind(userApi)(emailLogin, passwordLogin)
    .then((res) => {
      localStorage.setItem('token', res.token);
      popupLogin.close();
      buttonAuthorization.classList.remove('header__text_is-opened');
      vectorMain.classList.remove('header__vector_is-opened');
      savedArticles.classList.add('header__text_is-opened');
      vectorArticles.classList.add('header__vector_is-opened');
      logout.classList.add('header__text_is-opened');
    })
    .then(() => {
    //  setTimeout(console.log('Подождем токен'), 100000);
      setTimeout(() => console.log('Подождем токен ... '), 5000);
      if (localStorage.getItem('token')) {
        setTimeout(() => {
          mainApi.getUserData.bind(mainApi)()
            .then((result) => {
              localStorage.setItem('name', result.name);
              nameUser.textContent = localStorage.getItem('name');
              nameUserMobil.textContent = localStorage.getItem('name');
            })
            .catch((err) => {
              console.log('Ошибка. Запрос не выполнен: ', err);
            });
        }, 5000);
      } else { console.log('токен еще не пришел'); }
    })
    .catch((err) => {
      console.log(err);
    });
});

// открытие попапа Логин из формы Успешно доделать

loginRegistration.addEventListener('click', () => {
  popupResult.close();
  popupLogin.open();
});

// открытие попапа Зарегистрироваться из формы Войти

register.addEventListener('click', () => {
  popupLogin.close();
  popupRegistration.open();
});

// первоначальная регистрация пользователя

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailReg = registrationForm.elements.email_reg.value;
  const passwordReg = registrationForm.elements.password_reg.value;
  const nameReg = registrationForm.elements.name_reg.value;
  userApi.signUp.bind(userApi)(emailReg, passwordReg, nameReg)

    .then(() => {
      popupRegistration.close();
      popupResult.open();
    })
    .catch((err) => {
      console.log(err);
      document.querySelector('#error-registration').classList.add('popup__error_user_active');
    });
});

// слушатель открытия попапа регистрации (кнопка "Авторизоваться")

buttonAuthorization.addEventListener('click', () => {
  popupLogin.open();
});

// слушатель закрытия попапа регистрации
popupRegistrationClose.addEventListener('click', () => {
  popupRegistration.close();
});
