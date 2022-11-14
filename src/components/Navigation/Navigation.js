import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="navigation">
      <button
        onClick={handleShowMenu}
        className={`navigation__icon-burger ${
          showMenu ? "navigation__icon-burger-hidden" : ""
        }`}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 14L8 14V11L36 11V14Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 24L8 24V21L36 21V24Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36 34L8 34V31L36 31V34Z"
            fill="black"
          />
        </svg>
      </button>
      <div
        className={`navigation__place ${
          showMenu
            ? "navigation__place-visible navigation__place-menu-open"
            : ""
        }`}
      >
        <button
          onClick={handleShowMenu}
          className={`navigation__place-btn-close-hidden ${
            showMenu ? "navigation__place-btn-close" : ""
          }`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.16016"
              y="9.28249"
              width="3"
              height="22"
              transform="rotate(-45 7.16016 9.28249)"
              fill="black"
            />
            <rect
              x="22.7168"
              y="7.16117"
              width="3"
              height="22"
              transform="rotate(45 22.7168 7.16117)"
              fill="black"
            />
          </svg>
        </button>
        <ul
          className={`navigation__items ${
            showMenu ? "navigation__items-hidden navigation__items-menu" : ""
          }`}
        >
          <li
            className={`navigation__item-hidden ${
              showMenu ? "navigation__item" : ""
            }`}
          >
            <NavLink to="/">Главная</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/movies"
              className="navigation__link"
              activeClassName="navigation__link_active"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/saved-movies"
              activeClassName="navigation__link_active"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.4301 7.96781C8.79193 7.40572 9.75035 6.06478 9.75035 4.5C9.75035 2.42893 8.07141 0.75 6.00035 0.75C3.92928 0.75 2.25035 2.42893 2.25035 4.5C2.25035 6.06473 3.20869 7.40563 4.57045 7.96775C3.1758 8.19993 1.89287 8.76594 0.808594 9.58058L2.19015 11.4194C3.25143 10.6221 4.56898 10.15 6.0001 10.15C7.43122 10.15 8.74877 10.6221 9.81006 11.4194L11.1916 9.58058C10.1074 8.76601 8.82462 8.20003 7.4301 7.96781Z"
                  fill="black"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
