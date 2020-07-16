export default class UserApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.contentType = options.headers['Content-Type'];
  }

  userToServer(url, bodyObject) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': this.contentType,
      },
      body: JSON.stringify(bodyObject),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .catch((err) => {
        alert('Что-то пошло не так...');
        console.log(err);
        throw err;
      });
  }

  signUp(emailSignUp, passwordSignUp, nameSignUp) {
    return this.userToServer(`${this.baseUrl}/signup`, { email: emailSignUp, password: passwordSignUp, name: nameSignUp });
  }

  signIn(emailSignIn, passwordSignIn) {
    return this.userToServer(`${this.baseUrl}/signin`, { email: emailSignIn, password: passwordSignIn });
  }
}
