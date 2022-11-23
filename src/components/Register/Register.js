import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import Preloader from "../Preloader/Preloader";
import isEmail from 'validator/es/lib/isEmail';

function Register({ handleRegister, isOpenPreloader }) {

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

  function handleSubmit(e) {
    e.preventDefault();
    let { name, email, password } = values;
    handleRegister(name, email, password);
  }

  return (
    <section className="register">
      <Link to="/">
        <img className="logo logo-center" src={logo} alt="логотип" />{" "}
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>

      {isOpenPreloader ? (
        <Preloader />
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label className="form__label">Имя</label>
          <input
            onChange={handleChange}
            id="name"
            name="name"
            className="form__input"
            type="text"
            required
          />
          {/* <p className="form__error-message">{errors.email}</p> */}
          <label className="form__label">E-mail</label>
          <input
            onChange={handleChange}
            className="form__input"
            id="email"
            name="email"
            type="email"
            required
          />
          <p className="form__error-message">{errors.email}</p>
          <label className="form__label">Пароль</label>
          <input
            onChange={handleChange}
            className="form__input no-margin"
            id="password"
            name="password"
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
            Зарегистрироваться
          </button>
          <span className="form__label-signup">
            Уже зарегистрированы?{" "}
            <Link className="form__label-signup-link" to="/signin">
              Войти
            </Link>
          </span>
        </form>
      )}
    </section>
  );
}

export default Register;
