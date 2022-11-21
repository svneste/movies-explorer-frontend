import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register({ handleRegister} ) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let { name, email, password } = data;
    handleRegister(name, email, password);
  }

  return (
    <section className="register">
      <Link to="/">
        <img className="logo logo-center" src={logo} alt="логотип" />{" "}
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>

      <form onSubmit={handleSubmit} className="form">
        <label className="form__label">Имя</label>
        <input
          onChange={handleChange}
          id="name"
          name="name"
          className="form__input"
          type="text"
        />
        <label className="form__label">E-mail</label>
        <input
          onChange={handleChange}
          className="form__input"
          id="email"
          name="email"
          type="email"
        />
        <label className="form__label">Пароль</label>
        <input
          onChange={handleChange}
          className="form__input no-margin"
          id="password"
          name="password"
          type="password"
        />
        <p className="form__error-message">Что-то пошло не так ...</p>

        <button type="submit" aria-label="save" className="form__button-signup">
          Зарегистрироваться
        </button>
        <span className="form__label-signup">
          Уже зарегистрированы?{" "}
          <Link className="form__label-signup-link" to="/signin">
            Войти
          </Link>
        </span>
      </form>
    </section>
  );
}

export default Register;
