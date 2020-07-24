export default function quantityArticlesAndKeywords(arr) {
  const quantityArticles = arr.length;
  const quantityArticlesElement = document.querySelector('#quantityArticlesElement');
  const quantityArticlesText = document.querySelector('#quantityArticlesText');
  quantityArticlesElement.textContent = quantityArticles;

  switch (quantityArticles) {
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
  if (quantityArticles > 0) {
    const keywords = arr.map((elem) => elem.keyword);

    const numberWords = keywords.reduce((prValue, item) => {
      if (!prValue[item]) {
        prValue[item] = 1;
      } else {
        prValue[item] += 1;
      }
      return prValue;
    }, {});
    const numberWordsArr = Object.entries(numberWords);
    const numberWordsArrSort = numberWordsArr.sort((a, b) => (b[1] - a[1]));
    const numberKeyWords = numberWordsArrSort.length;
    switch (numberKeyWords) {
      case 1:
        document.querySelector('#firstWord').textContent = `${numberWordsArrSort[0][0]}`;
        document.querySelector('#secondWord').textContent = '';
        document.querySelector('#thirdWord').textContent = '';
        break;
      case 2:
        document.querySelector('#firstWord').textContent = `${numberWordsArrSort[0][0]}`;
        document.querySelector('#secondWord').textContent = ` и ${numberWordsArrSort[1][0]}`;
        document.querySelector('#thirdWord').textContent = '';
        break;
      case 3:
        document.querySelector('#firstWord').textContent = `${numberWordsArrSort[0][0]}`;
        document.querySelector('#secondWord').textContent = `, ${numberWordsArrSort[1][0]}`;
        document.querySelector('#thirdWord').textContent = ` и ${numberWordsArrSort[2][0]}`;
        break;
      default:
        document.querySelector('#firstWord').textContent = `${numberWordsArrSort[0][0]}`;
        document.querySelector('#secondWord').textContent = `, ${numberWordsArrSort[1][0]}`;
        document.querySelector('#thirdWord').textContent = `и ${numberKeyWords - 2} другим`;
    }
  } else { document.querySelector('#firstWord').textContent = ''; }
}
