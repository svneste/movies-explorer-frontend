class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getHeaders() {
    const jwt = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  editUserProfile(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  addNewMovie(data) {
    const {
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
    } = data;

    const thumbnail = `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`;
    const image = `https://api.nomoreparties.co${data.image.url}`;
    const movieId = data.id;

    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    }).then(this._checkResponse);
  }

  getSaveMoviesCard() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

  removeMovieCard(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._checkResponse);
  }

}

const api = new Api({
  url: "https://api.ivi.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
