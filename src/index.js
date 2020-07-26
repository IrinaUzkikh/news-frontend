import './css/index.css';

import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import UserApi from './js/api/UserApi';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';
import Popup from './js/components/Popup';
import FormValidator from './js/components/FormValidator';
import Header from './js/components/Header';
import renderLoading from './js/utils/renderLoading';

import { dateForCardsFromApi, dateForApiFromCards } from './js/utils/functionsСonvertingDates';

import {
  apiKey, pageSize, newsApiUrl, URL, dateTo, dateFrom,
} from './js/constants/constantsForApi';

import {
  buttonAuthorization, popupRegistrationClose, popupLoginClose, popupResultClose, login,
  loginRegistration, register, nameUser, nameUserMobil, logout, processPreloader, nothingFound,
  requestApiError, results, resultsContainer, resultsButton, headerMenuMobil, menuMobil,
  buttonAuthorizationMobil, menuLogout, menuMobilClose, errorRegistration,
  enterButton, registerButton, errorNamePassword,
} from './js/constants/constantsForElementSelectors';

const newsCard = new NewsCard();
const newsCardList = new NewsCardList(document.querySelector('.results__container'), newsCard);
const popupRegistration = new Popup(document.querySelector('#popup-registration'));
const popupLogin = new Popup(document.querySelector('#popup-login'));
const popupResult = new Popup(document.querySelector('#popup-result'));
const formValidator = new FormValidator();
const header = new Header();

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

const { searchForm, registrationForm, loginForm } = document.forms;

// функция для запроса имени пользователя

function requestToServerForName() {
  mainApi.getUserData.bind(mainApi)()
    .then((result) => {
      localStorage.setItem('name', result.name);
      nameUser.textContent = localStorage.getItem('name');
      nameUserMobil.textContent = localStorage.getItem('name');
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
}
// загрузка и перерисовка первой страницы

window.addEventListener('load', () => {
  if (localStorage.getItem('isLoggedIn')) {
    nameUser.textContent = localStorage.getItem('name');
    nameUserMobil.textContent = localStorage.getItem('name');
    header.headerAutorization();
  } else { header.headerStart(); }
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
  renderLoading(false, requestApiError);

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
        renderLoading(true, requestApiError);
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }
});

// слушатель добавления карточки

document.querySelector('.results__container').addEventListener('click', (event) => {
  const eventElement = event.target;
  if (eventElement.classList.contains('card__bookmark') && localStorage.getItem('isLoggedIn')) {
    if (eventElement.style.backgroundImage.includes('icon-gray')) {
      const newCard = eventElement.closest('.card');
      const keyword = `${newCard.querySelector('.card__keyword').textContent}`;
      const title = `${newCard.querySelector('.card__title').textContent}`;
      const text = `${newCard.querySelector('.card__text').textContent}`;
      const dateCard = `${newCard.querySelector('.card__date').textContent}`;
      const source = `${newCard.querySelector('.card__source').textContent}`;
      const link = `${newCard.querySelector('.card__link').href}`;
      const image = `${newCard.querySelector('.card__image').style.backgroundImage.slice(5, -2)}`;
      const date = dateForApiFromCards(dateCard);
      mainApi.createArticle.bind(mainApi)(keyword, title, text, date, source, link, image)
        .then((res) => {
          eventElement.style.backgroundImage = 'url(./images/icon-blue.png)';
          newCard.querySelector('.card__id').textContent = res.id;
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        });
    } else if (eventElement.style.backgroundImage.includes('icon-blue')) {
      const cardId = `${eventElement.closest('.card').querySelector('.card__id').textContent}`;
      mainApi.removeArticle.bind(mainApi)(event, cardId)
        .then(() => {
          newsCard.remove.bind(newsCardList)(event);
          eventElement.style.backgroundImage = 'url(./images/icon-gray.png)';
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        });
    }
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
      localStorage.setItem('isLoggedIn', 'true');
      popupLogin.close();
      header.headerAutorization();
    })
    .then(() => {
      if (localStorage.getItem('token')) {
        setTimeout(requestToServerForName, 5000);
      } else { console.log('токен для авторизации еще не пришел'); }
    })
    .catch((err) => {
      console.log(err);
      if (err.message.includes('401')) {
        formValidator.disableButton(enterButton);
        errorNamePassword.classList.add('popup__error_user_active');
        errorNamePassword.textContent = 'Такого пользователя нет';
      }
    });
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
      if (err.message.includes('409')) {
        console.log(err);
        errorRegistration.classList.add('popup__error_user_active');
        errorRegistration.textContent = 'Такой пользователь уже есть';
        formValidator.disableButton(registerButton);
      }
    });
});

// слушатель открытия попапа логина пользователя
login.addEventListener('click', () => {
  popupRegistration.close();
  popupLogin.open();
  formValidator.disableButton(enterButton);
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
    header.headerStart();
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  }
});

// слушатель открытия попапа регистрации (кнопка "Авторизоваться")

buttonAuthorization.addEventListener('click', () => {
  popupLogin.open();
  formValidator.disableButton(enterButton);
});

// слушатель закрытия попапа регистрации
popupRegistrationClose.addEventListener('click', () => {
  popupRegistration.close();
});

// открытие попапа Логин из формы Успешно

loginRegistration.addEventListener('click', () => {
  popupResult.close();
  popupLogin.open();
  formValidator.disableButton(enterButton);
});

// открытие попапа Зарегистрироваться из формы Войти

register.addEventListener('click', () => {
  popupLogin.close();
  popupRegistration.open();
  formValidator.disableButton(registerButton);
});

// слушатели иконки "сохранить"

document.querySelector('.results__container').addEventListener('mouseover', (event) => {
  const eventElement = event.target;
  if (eventElement.classList.contains('card__bookmark') && !localStorage.getItem('isLoggedIn')) {
    eventElement.closest('.card').querySelector('.card__button').classList.add('card__button_is-opened');
    eventElement.style.backgroundImage = 'url(./images/icon-black.png)';
  }
});

document.querySelector('.results__container').addEventListener('mouseout', (event) => {
  const eventElement = event.target;
  if (eventElement.classList.contains('card__bookmark') && !localStorage.getItem('isLoggedIn')) {
    eventElement.closest('.card').querySelector('.card__button').classList.remove('card__button_is-opened');
    eventElement.style.backgroundImage = 'url(./images/icon-gray.png)';
  }
});

// слушатели для мобильного меню

headerMenuMobil.addEventListener('click', () => {
  menuMobil.classList.add('menu_is-opened');
  if (!localStorage.getItem('isLoggedIn')) {
    header.headerMobilStart();
  } else {
    header.headerMobilAutorization();
  }
});

menuMobilClose.addEventListener('click', () => {
  menuMobil.classList.remove('menu_is-opened');
});

buttonAuthorizationMobil.addEventListener('click', () => {
  menuMobil.classList.remove('menu_is-opened');
  popupLogin.open();
  formValidator.disableButton(enterButton);
});

menuLogout.addEventListener('click', () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    menuMobil.classList.remove('menu_is-opened');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
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
