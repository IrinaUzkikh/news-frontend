/* eslint-disable class-methods-use-this */
export default class NewsCard {
  create(card) {
    const newsCard = document.createElement('div');
    newsCard.classList.add('card');
    newsCard.insertAdjacentHTML('beforeend', `
    <button class="card__bookmark"></button>
    <a class="card__link" target="_blank">
      <div class="card__image">
       <p class="card__keyword"></p>
      </div>
      <h3 class="card__date"></h3>
      <h2 class="card__title"></h2>
      <p class="card__text"></p>
      <p class="card__id" display></p>
      <p class="card__source"></p>
    </a>
    </div>`);

    // newsCard.querySelector('.card__link').href = `url(${card.link})`;
    newsCard.querySelector('.card__link').href = `${card.link}`;
    newsCard.querySelector('.card__image').style.backgroundImage = `url(${card.image})`;
    newsCard.querySelector('.card__keyword').textContent = card.keyword;
    newsCard.querySelector('.card__date').textContent = card.date;
    newsCard.querySelector('.card__title').textContent = card.title;
    newsCard.querySelector('.card__text').textContent = card.text;
    newsCard.querySelector('.card__source').textContent = card.source;
    newsCard.querySelector('.card__id').textContent = card.cardId;

    //!!!!Передавать здесь разные иконки: или удалить, или с первой страницы

    newsCard.querySelector('.card__bookmark').style.backgroundImage = 'url(./images/bookmark_gray1.png)';

    /*  if (placeCard.querySelector('.place-card__user-id').textContent === userInfo.getUserId) {
      placeCard.querySelector('.place-card__delete-icon').style.display = 'block';
    }
    if (card.signLike) {
      placeCard.querySelector('.place-card__like-icon').classList.toggle('place-card__like-icon_liked'); } */

    return newsCard;
  }
  /* like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  } */

  remove(event) {
    event.target.closest('.card').remove();
  }
}
