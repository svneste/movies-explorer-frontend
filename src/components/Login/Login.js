import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../Register/Register.css";
import logo from "../../images/logo.svg";
import Preloader from "../../components/Preloader/Preloader";
import isEmail from "validator/es/lib/isEmail";

function Login({ handleAutorize, isOpenPreloader }) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "email") {
      if (!isEmail(value)) {
        target.setCustomValidity("Некорректый адрес почты");
      } else {
        target.setCustomValidity("");
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };


  function hadleSubmit(e) {
    e.preventDefault();
    let { email, password } = values;
    handleAutorize(email, password);
  }

  return (
    <section className="register">
      <Link to="/">
        <img className="logo logo-center" src={logo} alt="логотип" />
      </Link>
      <h1 className="register__title">Рады видеть!</h1>
      {isOpenPreloader ? (
        <Preloader />
      ) : (
        <form onSubmit={hadleSubmit} className="form">
          <label className="form__label">E-mail</label>
          <input
            onChange={handleChange}
            name="email"
            id="email"
            className="form__input"
            type="email"

          />
          <p className="form__error-message">{errors.email}</p>
          <label className="form__label">Пароль</label>
          <input
            onChange={handleChange}
            id="password"
            name="password"
            className="form__input no-margin"
            type="password"
            required
          />
          {/* <p className="form__error-message">Что-то пошло не так ...</p> */}
          <button
            type="submit"
            aria-label="save"
            className="form__button-signup"
            disabled={!isValid}
          >
            Войти
          </button>
          <span className="form__label-signup">
            Еще не зарегистрированы?{" "}
            <Link className="form__label-signup-link" to="/signup">
              Регистрация
            </Link>
          </span>
        </form>
      )}
    </section>
  );
}

export default Login;
