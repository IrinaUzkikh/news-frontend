import '../css/add.css';

import NewsCard from '../js/components/NewsCard';
import NewsCardList from '../js/components/NewsCardList';
import MainApi from '../js/api/MainApi';

const URL = 'http://localhost:3000';

const nameUserAdd = document.querySelector('#nameUserAdd');
const nameUserAddMobil = document.querySelector('#nameUserAddMobil');
const nameUserContent = document.querySelector('#nameUserContent');

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

// слушатель иконки bookmark

document.querySelector('.results__container').addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    console.log(event.target.closest('.card').querySelector('.card__button'));
    event.target.closest('.card').querySelector('.card__button').classList.add('card__button_is-opened');
  }
});

document.querySelector('.results__container').addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('card__bookmark')) {
    console.log(event.target.closest('.card').querySelector('.card__button'));
    event.target.closest('.card').querySelector('.card__button').classList.remove('card__button_is-opened');
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
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }
});

// загрузка карточек на вторую страницу
window.addEventListener('load', () => {
  mainApi.getArticles.bind(mainApi)()
    .then((res) => {
      const arr = res.data.map((object) => {
        const {
          date, image, keyword, link, source, text, title, _id: cardId,
        } = object;
        console.log(date, image, keyword, link, source, text, title, cardId);
        const bookmark = 'url(../images/trash.png)';
        const page = 'articles';

        return {
          keyword, title, text, date, source, link, image, cardId, bookmark, page,
        };
      });
      console.log(arr.length);
      const quantityArticles = document.querySelector('#quantityArticles');
      const quantityArticlesText = document.querySelector('#quantityArticlesText');
      quantityArticles.textContent = arr.length;
      switch (quantityArticles) {
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
      //  console.log(elem.keyword);
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
          document.querySelector('#secondWord').textContent = numberWordsArrSort[1][0];
          break;
        case 3:
          document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
          document.querySelector('#secondWord').textContent = numberWordsArrSort[1][0];
          document.querySelector('#thirdWord').textContent = numberWordsArrSort[2][0];
          break;
        default:
          document.querySelector('#firstWord').textContent = numberWordsArrSort[0][0];
          document.querySelector('#secondWord').textContent = numberWordsArrSort[1][0];
          document.querySelector('#thirdWord').textContent = `${numberKeyWords - 2} другим`;
      }

      newsCardList.render.bind(newsCardList)(arr);
      return arr;
    })
    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
});
