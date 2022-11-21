import React from "react";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <nav className="promo__nav">
        <ul className="promo__nav-items">
          <li className="promo__nav-item">
            <a href="#about-project" className="promo__nav-title">
              О проекте
            </a>
          </li>
          <li className="promo__nav-item">
            <a href="#technology" className="promo__nav-title">
              Технологии
            </a>
          </li>
          <li className="promo__nav-item">
            <a href="#about-me" className="promo__nav-title">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Promo;
