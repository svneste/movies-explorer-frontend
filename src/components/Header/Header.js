import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";

function Header(props) {
  const { pathname } = useLocation();
  const tre = true;

  return (
    <header className={`header ${pathname !== "/" ? "header__icon_menu" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Логотип компании" className="header__logo" />
      </Link>

      {props.loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  );
}

export default Header;
