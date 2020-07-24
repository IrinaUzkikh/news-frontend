import '../css/add.css';

import NewsCard from '../js/components/NewsCard';
import NewsCardList from '../js/components/NewsCardList';
import MainApi from '../js/api/MainApi';
import { dateForCardsFromApi } from '../js/utils/functionsСonvertingDates';
import quantityArticlesAndKeywords from '../js/utils/quantityArticlesAndKeywords';

// const URL = 'http://newsnine.ga';
const URL = 'http://localhost:3000';

const nameUserAdd = document.querySelector('#nameUserAdd');
const nameUserAddMobil = document.querySelector('#nameUserAddMobil');
const nameUserContent = document.querySelector('#nameUserContent');
const headerMenuMobil = document.querySelector('#headerMenuMobil');

const mainApi = new MainApi({
  baseUrl: URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});
const newsCard = new NewsCard();
const newsCardList = new NewsCardList(document.querySelector('.results__container'), newsCard);

nameUserAdd.textContent = localStorage.getItem('name');
nameUserAddMobil.textContent = localStorage.getItem('name');
nameUserContent.textContent = localStorage.getItem('name');
const menuMobil = document.querySelector('#menuMobil');
const menuMobilClose = document.querySelector('#menuMobilClose');
const menuLogout = document.querySelector('#menuLogout');
const logout = document.querySelector('#logout');

// logout пользователя и переход на 1 страницу

logout.addEventListener('click', () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    document.location.href = '/';
  }
});

headerMenuMobil.addEventListener('click', () => {
  menuMobil.classList.add('menu_is-opened');
});

menuMobilClose.addEventListener('click', () => {
  menuMobil.classList.remove('menu_is-opened');
});

menuLogout.addEventListener('click', () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    menuMobil.classList.remove('menu_is-opened');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    document.location.href = '/';
  }
});
// слушатель иконки bookmark

document.querySelector('.results__container').addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    const cardBookmark = event.target;
    cardBookmark.closest('.card').querySelector('.card__button').classList.add('card__button_is-opened');
    cardBookmark.style.backgroundImage = 'url(./images/trash_black.png)';
  }
});

document.querySelector('.results__container').addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    const cardBookmark = event.target;
    cardBookmark.closest('.card').querySelector('.card__button').classList.remove('card__button_is-opened');
    cardBookmark.style.backgroundImage = 'url(./images/trash.png)';
  }
});

// удаление карточек по ID

document.querySelector('.results__container').addEventListener('click', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    const cardId = `${event.target.closest('.card').querySelector('.card__id').textContent}`;
    mainApi.removeArticle.bind(mainApi)(event, cardId)
      .then(() => {
        newsCard.remove.bind(newsCardList)(event);
      //  window.location.reload();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
    setTimeout(() => console.log('Пересчет количества статей ... '), 3000);
    setTimeout(() => {
      mainApi.getArticles.bind(mainApi)()
        .then((res) => {
          const arr = res.data.map((object) => {
            const
              { keyword } = object;
            return { keyword };
          });
          quantityArticlesAndKeywords(arr);
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен: ', err);
        });
    }, 5000);
  }
});

// загрузка карточек на вторую страницу

window.addEventListener('load', () => {
  mainApi.getArticles.bind(mainApi)()
    .then((res) => {
      const arr = res.data.map((object) => {
        const {
          date: dateCard, image, keyword, link, source, text, title, _id: cardId,
        } = object;
        const bookmark = 'url(../images/trash.png)';
        const page = 'articles';
        const date = dateForCardsFromApi(dateCard);
        return {
          keyword, title, text, date, source, link, image, cardId, bookmark, page,
        };
      });
      quantityArticlesAndKeywords(arr);
      newsCardList.render.bind(newsCardList)(arr);
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
});
