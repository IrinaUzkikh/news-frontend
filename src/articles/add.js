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

// document.querySelector('#articles').addEventListener('click', () => {
  console.log('!!!!!!!!!!!!!!!!!!!!');

  mainApi.getArticles.bind(mainApi)()
    .then((res) => {
        const arr = res.data.map((object) => {
        const {
          date, image, keyword, link, source, text, title, _id: cardId,
        } = object;
        console.log(date, image, keyword, link, source, text, title, cardId);
        return {
          keyword, title, text, date, source, link, image, cardId,
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

/*
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newsTopic = searchForm.elements.newsTopic.value;
  fetch(`${newsApiUrl}?q=${newsTopic}&from=${dateFrom}&to=${dateTo}&apiKey=${apiKey}&pageSize=${pageSize}`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const arr = data.articles.map((object) => {
        const {
          title,
          description: text,
          publishedAt: date,
          urlToImage: image,
          url: link,
        } = object;
        const source = object.source.name;
        const keyword = newsTopic;
        return {
          keyword, title, text, date, source, link, image,
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
*/


