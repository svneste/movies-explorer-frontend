export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

const checkResponse = (response) => {
  return response.ok
  ? response.json()
  : Promise.reject(`Ошибка ${response.status}`);
};

export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(checkResponse)
};
