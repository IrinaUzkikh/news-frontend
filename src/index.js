import './css/index.css';

const now = new Date();
const date1 = now - 1000 * 60 * 60 * 24 * 7;
console.log(now.toISOString().substr(0, 10));

console.log((new Date(date1)).toISOString().substr(0, 10));

console.log('первая !!! страница');

document.querySelector('.search__button').addEventListener('click', () => {
  fetch('https://newsapi.org/v2/everything?q=Москва&from=2020-07-13&to=2020-07-14&apiKey=ce2d4e553e614a3fa2ef645ac1fac3ed&pageSize=7')
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
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
});
