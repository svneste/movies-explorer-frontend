import React, { useState } from "react";
import "./UserInfo.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import isEmail from "validator/es/lib/isEmail";

function UserInfo({ handleOutSign, handleUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "name" || name === "email") {
      if (value === currentUser.name) {
        target.setCustomValidity("Введите другое имя");
      } else {
        target.setCustomValidity("");
      }
    }


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

    let { name, email } = values;

    handleUpdateUser(name, email);
  }

  return (
    <section className="userinfo">
      <form onSubmit={handleSubmit}>
        <h2 className="userinfo__title">Привет, {currentUser.name}</h2>
        <div className="userinfo_container-name">
          <p className="userinfo__name">Имя</p>
          <input
            onChange={handleChange}
            name="name"
            id="name"
            defaultValue={currentUser.name}
            className="userinfo__name-value"
          ></input>
        </div>

        <div className="userinfo_container-email">
          <p className="userinfo__email">E-mail</p>
          <div>
            <input
              onChange={handleChange}
              defaultValue={currentUser.email}
              name="email"
              id="email"
              className="userinfo__email-value"
            ></input>
            <p className="form__error-message">{errors.email}</p>
          </div>
        </div>
        <div className="userinfo_container-button">
          <button
            type="submit"
            aria-label="save"
            className="userinfo__button-edit"
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button onClick={handleOutSign} className="userinfo__button-signout">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default UserInfo;
