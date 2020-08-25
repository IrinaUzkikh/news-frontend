import { dateForApiFromNewDate } from '../utils/functionsСonvertingDates';

const apiKey = 'ce2d4e553e614a3fa2ef645ac1fac3ed';

const pageSize = 7;
// const newsApiUrl = 'https://newsapi.org/v2/everything';
// const newsApiUrl = 'https://praktikum.tk/news/v2/everything';
// новый путь вместо praktikum.tk nomoreparties.co
const newsApiUrl = 'https://nomoreparties.co/news/v2/everything';

// const URL = 'http://localhost:3000';
// const URL = 'http://newsnine.ga';
const URL = 'https://api.news-nine.ga';

const frontPage = 'https://irinauzkikh.github.io/news-frontend/';
// const frontPage = '/';

const dateTo = dateForApiFromNewDate(new Date());
const dateFrom = dateForApiFromNewDate(new Date(new Date() - 1000 * 60 * 60 * 24 * 7));

export {
  apiKey, pageSize, newsApiUrl, URL, dateTo, dateFrom, frontPage,
};
