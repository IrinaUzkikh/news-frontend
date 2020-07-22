const arrMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function dateForApiFromNewDate(date) {
  const dateFormatApi = date.toISOString().substr(0, 10);
  return dateFormatApi;
}

function dateForCardsFromApi(date) {
  const dateFormatCard = `${parseInt(date.substr(8, 2), 10)} ${arrMonth[parseInt(date.substr(5, 2), 10) - 1]}, ${date.substr(0, 4)}`;
  return dateFormatCard;
}

function dateForApiFromCards(date) {
  const dateFormatRequestArr = date.split(' ');
  const numberMonth = arrMonth.indexOf(dateFormatRequestArr[1].slice(0, -1)) + 1;
  let dateFormatRequestMonth = 0;
  if ((numberMonth) < 10) {
    dateFormatRequestMonth = `0${numberMonth}`;
  } else {
    dateFormatRequestMonth = numberMonth;
  }
  let dateFormatRequestDay = 0;
  if (dateFormatRequestArr[0] < 10) {
    dateFormatRequestDay = `0${dateFormatRequestArr[0]}`;
  } else {
    const index = 0;
    dateFormatRequestDay = dateFormatRequestArr[index];
  }
  console.log(dateFormatRequestMonth);
  const dateFormatApi = `${dateFormatRequestArr[2]}-${dateFormatRequestMonth}-${dateFormatRequestDay}`;
  return dateFormatApi;
}

export { dateForApiFromNewDate, dateForCardsFromApi, dateForApiFromCards };
