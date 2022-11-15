import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../Register/Register.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="register">
      <Link to="/">
        <img className="logo logo-center" src={logo} alt="логотип" />
      </Link>
      <h1 className="register__title">Рады видеть!</h1>

      <form className="form">
        <label className="form__label">E-mail</label>
        <input className="form__input" type="email" />
        <label className="form__label">Пароль</label>
        <input className="form__input no-margin" type="password" />
        <p className="form__error-message">Что-то пошло не так ...</p>
        <button className="form__button-signup">Войти</button>
        <span className="form__label-signup">
          Еще не зарегистрированы?{" "}
          <Link className="form__label-signup-link" to="/signup">
            Регистрация
          </Link>
        </span>
      </form>
    </section>
  );
}

export default Login;
