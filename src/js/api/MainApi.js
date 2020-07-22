export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.authorization = options.headers.authorization;
    this.contentType = options.headers['Content-Type'];
  }

  requestToServer(url, methodToRequest, bodyObject) {
    return fetch(url, {
      method: methodToRequest,
      headers: {
        authorization: this.authorization,
        'Content-Type': this.contentType,
      },
      body: JSON.stringify(bodyObject),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .catch((err) => {
   //     alert('Что-то пошло не так...');
        console.log(err);
        throw err;
      });
  }

  getUserData() {
    return this.requestToServer(`${this.baseUrl}/users/me`, 'GET');
  }

  getArticles() {
    return this.requestToServer(`${this.baseUrl}/articles`, 'GET');
  }

  createArticle(newKeyword, newTitle, newText, newDate, newSource, newLink, newImage) {
    return this.requestToServer(`${this.baseUrl}/articles`, 'POST', {
      keyword: newKeyword,
      title: newTitle,
      text: newText,
      date: newDate,
      source: newSource,
      link: newLink,
      image: newImage,
    });
  }

  removeArticle(event, cardId) {
    return this.requestToServer(`${this.baseUrl}/articles/${cardId}`, 'DELETE');
  }
}
