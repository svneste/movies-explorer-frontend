import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavAuth.css";

function NavAuth() {
  return (
    <nav className="nav__auth">
      <Link to="/signup">
        <button className="button__signup">Регистрация</button>
      </Link>
      <Link to="/signin">
        <button className="button">Войти</button>
      </Link>
    </nav>
  );
}

export default NavAuth;
