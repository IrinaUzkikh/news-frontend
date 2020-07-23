import '../css/add.css';

import NewsCard from '../js/components/NewsCard';
import NewsCardList from '../js/components/NewsCardList';
import MainApi from '../js/api/MainApi';
import { dateForCardsFromApi } from '../js/utils/functionsСonvertingDates';
// date1 =
// console.log()

const URL = 'http://newsnine.ga';
// const URL = 'http://localhost:3000';

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

function quantityArticlesAndKeywords(arr) {
  console.log(arr.length);
  const quantityArticles = document.querySelector('#quantityArticles');
  const quantityArticlesText = document.querySelector('#quantityArticlesText');
  quantityArticles.textContent = arr.length;

  switch (parseInt(quantityArticles.textContent, 10)) {
    case 1:
      quantityArticlesText.textContent = 'сохраненная статья';
      break;
    case 2:
    case 3:
    case 4:
      quantityArticlesText.textContent = 'сохраненные статьи';
      break;
    default:
      quantityArticlesText.textContent = 'сохраненных статей';
  }
  const keywords = arr.map((elem) => {
    return elem.keyword;
  });
  // console.log(keywords);
  
  const numberWords = keywords.reduce((prValue, item) => {
    if (!prValue[item]) {
      prValue[item] = 1;
    } else {
      prValue[item] += 1;
    }
    return prValue;
  }, {});
  // console.log(Object.entries(numberWords));
  const numberWordsArr = Object.entries(numberWords);
  // console.log(numberWordsArr);
  const numberWordsArrSort = numberWordsArr.sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(numberWordsArrSort);
  const numberKeyWords = numberWordsArrSort.length;
  console.log(numberWordsArrSort[0][0]);

  switch (numberKeyWords) {
    case 1:
      document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
      break;
    case 2:
      document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
      document.querySelector('#secondWord').textContent = ` и ${numberWordsArrSort[1][0]}`;
      break;
    case 3:
      document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
      document.querySelector('#secondWord').textContent = `, ${numberWordsArrSort[1][0]}`;
      document.querySelector('#thirdWord').textContent = ` и ${numberWordsArrSort[2][0]}`;
      break;
    default:
      document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
      document.querySelector('#secondWord').textContent = `, ${numberWordsArrSort[1][0]}`;
      document.querySelector('#thirdWord').textContent = `и ${numberKeyWords - 2} другим`;
  }
}

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
    console.log(event.target);
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
    console.log(cardId);

    mainApi.removeArticle.bind(mainApi)(event, cardId)
      .then(() => {
        newsCard.remove.bind(newsCardList)(event);
      //  window.location.reload();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
    setTimeout(() => console.log('Пересчет количества статей ... '), 5000);
    setTimeout(() => {
      mainApi.getArticles.bind(mainApi)()
        .then((res) => {
          const arr = res.data.map((object) => {
            const
              {
                keyword,
              /* date: dateCard, image, keyword, link, source, text, title, _id: cardId, */
              } = object;
            /*  const bookmark = 'url(../images/trash.png)';
             const page = 'articles';
             const date = dateForCardsFromApi(dateCard); */
            return {
              keyword,
            /* keyword, title, text, date, source, link, image, cardId, bookmark, page, */
            };
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
      /*
      console.log(arr.length);
      const quantityArticles = document.querySelector('#quantityArticles');
      const quantityArticlesText = document.querySelector('#quantityArticlesText');
      quantityArticles.textContent = arr.length;

      switch (parseInt(quantityArticles.textContent, 10)) {
        case 1:
          quantityArticlesText.textContent = 'сохраненная статья';
          break;
        case 2:
          quantityArticlesText.textContent = 'сохраненные статьи';
          break;
        case 3:
          quantityArticlesText.textContent = 'сохраненные статьи';
          break;
        case 4:
          quantityArticlesText.textContent = 'сохраненные статьи';
          break;
        default:
          quantityArticlesText.textContent = 'сохраненных статей';
      }
      const keywords = arr.map((elem) => {
        return elem.keyword;
      });
      // console.log(keywords);
      const numberWords = keywords.reduce((prValue, item) => {
        if (!prValue[item]) {
          prValue[item] = 1;
        } else {
          prValue[item] += 1;
        }
        return prValue;
      }, {});
      // console.log(Object.entries(numberWords));
      const numberWordsArr = Object.entries(numberWords);
      // console.log(numberWordsArr);
      const numberWordsArrSort = numberWordsArr.sort((a, b) => {
        return b[1] - a[1];
      });
      console.log(numberWordsArrSort);
      const numberKeyWords = numberWordsArrSort.length;
      console.log(numberWordsArrSort[0][0]);

      switch (numberKeyWords) {
        case 1:
          document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
          break;
        case 2:
          document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
          document.querySelector('#secondWord').textContent = `и ${numberWordsArrSort[1][0]}`;
          break;
        case 3:
          document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
          document.querySelector('#secondWord').textContent = `, ${numberWordsArrSort[1][0]}`;
          document.querySelector('#thirdWord').textContent = `и ${numberWordsArrSort[2][0]}`;
          break;
        default:
          document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
          document.querySelector('#secondWord').textContent = `, ${numberWordsArrSort[1][0]}`;
          document.querySelector('#thirdWord').textContent = `и ${numberKeyWords - 2} другим`;
      }
*/
      newsCardList.render.bind(newsCardList)(arr);
    //  return arr;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
});
