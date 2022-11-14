import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <Link to="/">
        <img className="logo logo-center" src={logo} alt="логотип" />{" "}
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>

      <form className="form">
        <label className="form__label">Имя</label>
        <input className="form__input" type="text" />
        <label className="form__label">E-mail</label>
        <input className="form__input" type="email" />
        <label className="form__label">Пароль</label>
        <input className="form__input no-margin" type="password" />
        <p className="form__error-message">Что-то пошло не так ...</p>
      </form>

      <button className="form__button-signup">Зарегистрироваться</button>
      <span className="form__label-signup">
        Уже зарегистрированы?{" "}
        <Link className="form__label-signup-link" to="/signin">
          Войти
        </Link>
      </span>
    </section>
  );
}

export default Register;
