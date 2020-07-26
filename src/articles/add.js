import '../css/add.css';

import NewsCard from '../js/components/NewsCard';
import NewsCardList from '../js/components/NewsCardList';
import MainApi from '../js/api/MainApi';
import { dateForCardsFromApi } from '../js/utils/functionsСonvertingDates';
import quantityArticlesAndKeywords from '../js/utils/quantityArticlesAndKeywords';

import { URL, frontPage } from '../js/constants/constantsForApi';

import {
  nameUserAdd, nameUserAddMobil, nameUserContent, headerMenuMobilAdd, menuMobilAdd,
  menuMobilCloseAdd, menuLogoutAdd, logoutAdd,
} from '../js/constants/constantsForElementSelectors';

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

// logout пользователя и переход на 1 страницу

logoutAdd.addEventListener('click', () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    document.location.href = frontPage;
  }
});

headerMenuMobilAdd.addEventListener('click', () => {
  menuMobilAdd.classList.add('menu_is-opened');
});

menuMobilCloseAdd.addEventListener('click', () => {
  menuMobilAdd.classList.remove('menu_is-opened');
});

menuLogoutAdd.addEventListener('click', () => {
  if (window.confirm('Вы действительно хотите выйти?')) {
    menuMobilAdd.classList.remove('menu_is-opened');
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    document.location.href = frontPage;
  }
});
// слушатели иконки bookmark

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
  //  setTimeout(() => console.log('Пересчет количества статей ... '), 3000);
  //  setTimeout(() => {
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
//    }, 5000);
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
        const bookmark = 'url(./images/trash.png)';
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
