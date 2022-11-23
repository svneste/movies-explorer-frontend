import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";

function Header(loggedIn) {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname !== "/" ? "header__icon_menu" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Логотип компании" className="header__logo" />
      </Link>
      {pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile" ? (
        <Navigation />
      ) : loggedIn ? (
        <NavAuth />
      ) : (
        <Navigation />
      )}
    </header>
  );
}

export default Header;
