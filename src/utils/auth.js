export const BASE_URL = "https://api.ivi.nomoredomains.icu";

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

export const autorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then((response) => {
    try {
      if (response.status === 200) {
        return response.json();
      }
    } catch (e) {
      return e;
    }
  })
  .catch((err) => console.log(err));
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
  .then(checkRes);
};

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}
