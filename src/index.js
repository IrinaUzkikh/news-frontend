import './css/index.css';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import UserApi from './js/api/UserApi';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';

import Popup from './js/components/Popup';

const dateTo = (new Date()).toISOString().substr(0, 10);
const dateFrom = (new Date(new Date() - 1000 * 60 * 60 * 24 * 7)).toISOString().substr(0, 10);
const apiKey = 'ce2d4e553e614a3fa2ef645ac1fac3ed';
const pageSize = 7;
const newsApiUrl = 'https://newsapi.org/v2/everything';

const newsCard = new NewsCard();
const newsCardList = new NewsCardList(document.querySelector('.results__container'), newsCard);
const popupRegistration = new Popup(document.querySelector('#popup-registration'));
const popupLogin = new Popup(document.querySelector('#popup-login'));
const popupResult = new Popup(document.querySelector('#popup-result'));
const URL = 'http://localhost:3000';

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
/* сonst newsApi = new NewsApi(
  {
    dateTo, dateFrom, apiKey, pageSize, newsApiUrl,
  },
); */

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

const { searchForm, registrationForm, loginForm } = document.forms;

console.log(localStorage.getItem('token'));

// функция, которая при загрузке запускает прелоудер или открывает сообщения"

function renderLoading(isLoading, element) {
  if (isLoading) {
    element.classList.add('process_is-opened');
  } else {
    element.classList.remove('process_is-opened');
  }
}

// слушатель иконки сохранить

document.querySelector('.results__container').addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    console.log(event.target.closest('.card').querySelector('.card__button'));
    event.target.closest('.card').querySelector('.card__button').classList.add('card__button_is-opened');
  }
});
// слушатель иконки сохранить
document.querySelector('.results__container').addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    console.log(event.target.closest('.card').querySelector('.card__button'));
    event.target.closest('.card').querySelector('.card__button').classList.remove('card__button_is-opened');
  }
});

// загрузка статей с NewsApi
// !!!!!! добавить в карточку иконкупо параметру
// загружать по 3!!!!!!!!

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  results.classList.remove('results_is-opened');
  const cards = resultsContainer.querySelectorAll('.card');
  cards.forEach((item) => {
    console.log(item);
    resultsContainer.removeChild(item);
  });
  renderLoading(false, nothingFound);
  renderLoading(false, requestNewsApiError);

  const newsTopic = searchForm.elements.newsTopic.value;
  /* fetch(`${newsApiUrl}?q=${newsTopic}&from=${dateFrom}&to=${dateTo}&apiKey=${apiKey}&pageSize=${pageSize}`) */
  console.log(dateTo, dateFrom, apiKey, pageSize, newsApiUrl, newsTopic);
  const newsApi = new NewsApi(
    {
      dateTo, dateFrom, apiKey, pageSize, newsApiUrl, newsTopic,
    },
  );
  renderLoading(true, processPreloader);
  newsApi.getNews.bind(newsApi)()
    .then((data) => {
      //  console.log(data);
      const arrArticles = data.articles.map((object) => {
        const {
          title,
          description: text,
          publishedAt: date,
          urlToImage: image,
          url: link,
        } = object;
        const source = object.source.name;
        const keyword = newsTopic;
        const bookmark = 'url(./images/bookmark_gray1.png)';
        // const bookmark = 'url(./images/bookmark_gray1.png)';
        const page = 'home';

        return {
          keyword, title, text, date, source, link, image, bookmark, page,
        };
      });
      console.log(arrArticles);
      const arrArticlesLength = arrArticles.length;
      if (arrArticlesLength === 0) {
        renderLoading(false, processPreloader);
        renderLoading(true, nothingFound);
      } else {
        resultsButton.classList.remove('results__button_is-closed');
        renderLoading(false, processPreloader);
        //    const resultsContainer = document.createElement('div');
        //    results.appendChild(resultsContainer);
        //    resultsContainer.classList.add('results__container');

        results.classList.add('results_is-opened');
        //    const newsCardList = new NewsCardList(document.querySelector('.results__container'), newsCard);
        const arr = arrArticles.slice(0, 3);
        newsCardList.render.bind(newsCardList)(arr);
        // загрузили первые 3
        if (arrArticlesLength < 4) {
          resultsButton.classList.add('results__button_is-closed');
        } else {
          // по кнопке грузим дальше, если еще есть карточки

          console.log('первые 3 до 7');
          let startArr = 3;
          let endArr = 6;
          console.log(startArr);
          console.log(endArr);
          resultsButton.addEventListener('click', () => {
            if (startArr <= arrArticlesLength) {
              const array = arrArticles.slice(startArr, endArr);
              console.log(array);
              newsCardList.render.bind(newsCardList)(array);
              startArr += 3;
              endArr += 3;
              console.log(startArr);
              console.log(endArr);
              if (startArr > arrArticlesLength) { resultsButton.classList.add('results__button_is-closed'); }
            }
          });
        }
      }
    })
    .catch((err) => {
      renderLoading(false, processPreloader);
      renderLoading(true, requestNewsApiError);
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
});

// слушатель добавления карточки

document.querySelector('.results__container').addEventListener('click', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    const newCard = event.target.closest('.card');
    const keyword = `${newCard.querySelector('.card__keyword').textContent}`;
    const title = `${newCard.querySelector('.card__title').textContent}`;
    const text = `${newCard.querySelector('.card__text').textContent}`;
    const date = `${newCard.querySelector('.card__date').textContent.substr(0, 10)}`;
    const source = `${newCard.querySelector('.card__source').textContent}`;
    const link = `${newCard.querySelector('.card__link').href}`;
    const image = `${newCard.querySelector('.card__image').style.backgroundImage.slice(5, -2)}`;

    console.log(keyword, title, text, date, source, link, image);

    mainApi.createArticle.bind(mainApi)(keyword, title, text, date, source, link, image)
      .then((data) => {
        console.log(data);
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
// перерисовать еще мобильный экран!!!!!!!!!!!!!!!!!!!!!!!!
// подтягиваются mail и пароль из формы registration !!!!!!
// не чистятся формы!!!!!
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('login');
  const emailLogin = loginForm.elements.email_login.value;
  const passwordLogin = loginForm.elements.password_login.value;
  console.log(emailLogin, passwordLogin);
  loginForm.elements.email_login.value = '';
  loginForm.elements.password_login.value = '';
  userApi.signIn.bind(userApi)(emailLogin, passwordLogin)
    .then((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      console.log(loginForm);
      loginForm.reset();
      loginForm.elements.email_login.value = '';
      loginForm.elements.password_login.value = '';
      console.log(loginForm);
      popupLogin.close();
      buttonAuthorization.classList.remove('header__text_is-opened');
      vectorMain.classList.remove('header__vector_is-opened');
      savedArticles.classList.add('header__text_is-opened');
      vectorArticles.classList.add('header__vector_is-opened');
      logout.classList.add('header__text_is-opened');
    })
    .catch((err) => {
      console.log(err);
    });
  // вставила запрос имени!!!!!
  mainApi.getUserData.bind(mainApi)()
    .then((result) => {
      console.log('login name');
      localStorage.setItem('name', result.name);
      nameUser.textContent = localStorage.getItem('name');
      nameUserMobil.textContent = localStorage.getItem('name');
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
});

// открытие попапа Логин из формы Успешно доделать

loginRegistration.addEventListener('click', () => {
  popupResult.close();
  popupLogin.open();
});

// открытие попапа Зарегистрироваться из формы Войти ?????????????? ИСПРАВИЛА

register.addEventListener('click', () => {
  popupLogin.close();
  popupRegistration.open();
});

// первоначальная регистрация пользователя
// Странно, что не работает закрытие и очистка формы,
// если их не вынести из промиса, внизу работает???????

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('!!!!!!!!!!!!');
  const emailReg = registrationForm.elements.email_reg.value;
  const passwordReg = registrationForm.elements.password_reg.value;
  const nameReg = registrationForm.elements.name_reg.value;
  console.log(emailReg, passwordReg, nameReg);
  userApi.signUp.bind(userApi)(emailReg, passwordReg, nameReg)

    .then((res) => {
      console.log(res);
      // localStorage.setItem('name', res.name);
      registrationForm.reset();
      registrationForm.elements.email_reg.value = '';
      registrationForm.elements.password_reg.value = '';
      registrationForm.elements.name_reg.value = '';
      popupRegistration.close();
      popupResult.open();
    })
    .catch((err) => {
      console.log(err);
      console.log('index');
    });
});

// слушатель открытия попапа регистрации (кнопка "Авторизоваться") поменяла на Login
// !!!!! проверить кнопку
buttonAuthorization.addEventListener('click', () => {
  popupLogin.open();
});

// слушатель закрытия попапа регистрации
popupRegistrationClose.addEventListener('click', () => {
  popupRegistration.close();
});

// ДАТЫ!!!!!!!
/*
const date = '2020-06-15T00:00:00.000Z';

const arrMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

/*
const date = new Date().toLocaleString('ru', {
  month: 'long',
});*/
/*
const dateFormatCard = `${parseInt(date.substr(8, 2))} ${arrMonth[parseInt(date.substr(5, 2)) - 1]}, ${date.substr(0, 4)}`;
console.log(dateFormatCard);

const dateFormatRequestArr = dateFormatCard.split(' ');
console.log(dateFormatRequestArr);
const numberMonth = arrMonth.indexOf(dateFormatRequestArr[1].slice(0, -1)) + 1;
console.log(numberMonth);
let dateFormatRequestMonth = 0;
if ((numberMonth) < 10) {
  dateFormatRequestMonth = `0${numberMonth}`;
  console.log(11111111);
  console.log(dateFormatRequestMonth);
} else {
  dateFormatRequestMonth = numberMonth;
  console.log(2222222);
}
console.log(dateFormatRequestMonth);

// const dateFormatRequest = `${dateFormatRequestArr[2]}-${arrMonth.indexOf(dateFormatRequestArr[1].slice(0, -1)) + 1}-${dateFormatRequestArr[0]}`;

const dateFormatRequest = `${dateFormatRequestArr[2]}-${dateFormatRequestMonth}-${dateFormatRequestArr[0]}`;
console.log(dateFormatRequest);
*/

// загрузка второй страницы

/* const newsTopic = searchForm.elments.newsTopic.value; */
// console.log('newsTopic' + newsTopic);
// console.log((new Date(date1)).toISOString().substr(0, 10));
// console.log('первая !!! страница');

/* document.querySelector('.search__button').addEventListener('click', () => {
  fetch('https://newsapi.org/v2/everything?q=Москва&from=2020-07-13&to=2020-07-14&apiKey=ce2d4e553e614a3fa2ef645ac1fac3ed&pageSize=7')
  fetch(`https://newsapi.org/v2/everything?q=${newsTopic}&from=${dateFrom}&to=${dateTo}&apiKey=ce2d4e553e614a3fa2ef645ac1fac3ed&pageSize=7`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const arr = data.articles.map((object) => {
        const {
          title,
          description,
          publoshedAt,
          urlToImage,
          url,
        } = object;
        const sourceName = object.source.name;
        return {
          title, description, publoshedAt, urlToImage, url, sourceName,
        };
      });
      console.log(arr);
      newsCardList.render.bind(newsCardList)(arr);
      return arr;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
});

document.querySelector('.header__button').addEventListener('click', () => {
  fetch('http://localhost:3000/articles', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => {
      console.log(res);
      console.log(`${localStorage.getItem('token')}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
}); */

// регистрация пользователя КОПИЯ
/*
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('!!!!!!!!!!!!');
  const emailReg = registrationForm.elements.email_reg.value;
  const passwordReg = registrationForm.elements.password_reg.value;
  const nameReg = registrationForm.elements.name_reg.value;
  console.log(emailReg, passwordReg, nameReg);
  userApi.signUp.bind(userApi)(emailReg, passwordReg, nameReg)

    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      console.log('index');
    });
}); */
/*
// загрузка статей
document.querySelector('.header__button').addEventListener('click', () => {
  mainApi.getArticles.bind(mainApi)()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
});
*/
