export default class NewsCard {
  create(card) {
    const newsCard = document.createElement('div');
    newsCard.classList.add('card');
    newsCard.insertAdjacentHTML('beforeend', `
    <button class="card__bookmark"></button>
    <a class="card__link" target="_blank">
      <div class="card__image">
       <p class="card__keyword"></p>
       <button class="card__button"></button>
      </div>
      <h3 class="card__date"></h3>
      <h2 class="card__title"></h2>
      <p class="card__text"></p>
      <p class="card__id" display></p>
      <p class="card__source"></p>
    </a>
    </div>`);

    newsCard.querySelector('.card__link').href = `${card.link}`;
    newsCard.querySelector('.card__image').style.backgroundImage = `url(${card.image})`;
    newsCard.querySelector('.card__keyword').textContent = card.keyword;
    newsCard.querySelector('.card__date').textContent = card.date;
    newsCard.querySelector('.card__title').textContent = card.title;
    newsCard.querySelector('.card__text').textContent = card.text;
    newsCard.querySelector('.card__source').textContent = card.source;
    newsCard.querySelector('.card__id').textContent = card.cardId;
    newsCard.querySelector('.card__bookmark').style.backgroundImage = card.bookmark;

    if (card.page === 'articles') {
      newsCard.querySelector('.card__keyword').classList.add('card__keyword_is-opened');
      newsCard.querySelector('.card__button').textContent = 'Убрать из сохраненных';
    } else {
      newsCard.querySelector('.card__button').textContent = 'Войдите, чтобы сохранять статьи';
      newsCard.querySelector('.card__keyword').style.display = 'no';
    }
    return newsCard;
  }

  remove(event) {
    event.target.closest('.card').remove();
  }
}
