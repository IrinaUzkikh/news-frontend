import '../css/add.css';

console.log('вторая страница');

const nameUserAdd = document.querySelector('#nameUserAdd');
const nameUserAddMobil = document.querySelector('#nameUserAddMobil');
const nameUserContent = document.querySelector('#nameUserContent');


nameUserAdd.textContent = localStorage.getItem('name');
nameUserAddMobil.textContent = localStorage.getItem('name');
nameUserContent.textContent = localStorage.getItem('name');
