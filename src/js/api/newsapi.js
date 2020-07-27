export default class NewsApi {
  constructor(options) {
    this.dateTo = options.dateTo;
    this.dateFrom = options.dateFrom;
    this.apiKey = options.apiKey;
    this.pageSize = options.pageSize;
    this.newsApiUrl = options.newsApiUrl;
    this.newsTopic = options.newsTopic;
  }

  getNews() {
    return fetch(`${this.newsApiUrl}?q=${this.newsTopic}&from=${this.dateFrom}&to=${this.dateTo}&apiKey=${this.apiKey}&pageSize=${this.pageSize}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
}
