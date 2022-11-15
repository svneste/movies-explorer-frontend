import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavAuth.css";

function NavAuth() {
  return (
    <nav className="nav__auth">
      <Link to="/signup">
        <button className="nav__button-signup">Регистрация</button>
      </Link>
      <Link to="/signin">
        <button className="nav__button">Войти</button>
      </Link>
    </nav>
  );
}

export default NavAuth;
