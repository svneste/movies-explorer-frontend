export const BASE_URL = "https://api.facebook.nomoredomains.icu";

const checkResponse = (response) => {
  return response.ok
  ? response.json()
  : Promise.reject(`Ошибка ${response.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password}),
  })
    .then(checkResponse)
};
