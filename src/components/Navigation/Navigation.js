import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [showMenu, isShowMenu] = useState(false);

  const handleShowMenu = () => isShowMenu(!showMenu);

  return (
    <nav className="navigation">
      <button
        onClick={handleShowMenu}
        className={`navigation__icon-burger ${
          showMenu ? "navigation__icon-burger-hidden" : ""
        }`}
      >
      </button>
      <div
        className={`navigation__place ${
          showMenu
            ? "navigation__place-visible navigation__place-menu-open"
            : ""
        }`}
      >
        <div className="navigation__sidebar">
          <div className="navigation__list-container">
            <button
              onClick={handleShowMenu}
              className={`navigation__place-btn-close-hidden ${
                showMenu ? "navigation__place-btn-close" : ""
              }`}
            >
            </button>
            <ul
              className={`navigation__items ${
                showMenu
                  ? "navigation__items-hidden navigation__items-menu"
                  : ""
              }`}
            >
              <li
                className={`navigation__item-hidden ${
                  showMenu ? "navigation__item" : ""
                }`}
              >
                <NavLink className="navigation__link" to="/">Главная</NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/movies"
                  className={ ({ isActive }) =>  isActive ? "navigation__link_active" : "navigation__link"}
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  to="/saved-movies"
                  className={ ({ isActive }) =>  isActive ? "navigation__link_active" : "navigation__link"}
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
            </ul>
            <Link className="navigation__link" to="/profile">
              <button className="navigation__link-profile icon__profile">
                Аккаунт
                <div className="navigation__link-profile-btn">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.4301 7.96781C8.79193 7.40572 9.75035 6.06478 9.75035 4.5C9.75035 2.42893 8.07141 0.75 6.00035 0.75C3.92928 0.75 2.25035 2.42893 2.25035 4.5C2.25035 6.06473 3.20869 7.40563 4.57045 7.96775C3.1758 8.19993 1.89287 8.76594 0.808594 9.58058L2.19015 11.4194C3.25143 10.6221 4.56898 10.15 6.0001 10.15C7.43122 10.15 8.74877 10.6221 9.81006 11.4194L11.1916 9.58058C10.1074 8.76601 8.82462 8.20003 7.4301 7.96781Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
