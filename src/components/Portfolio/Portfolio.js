import React from "react";
import "./Portfolio.css";
import icon from "../../images/icon.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <a href="https://github.com/svneste/how-to-learn" target="blank">
          <li className="portfolio__item">
            Статичный сайт
            <img className="portfolio__icon" src={icon} alt="иконка" />
          </li>
        </a>
        <a href="https://github.com/svneste/sprint3-travel" target="blank">
          <li className="portfolio__item">
            Адаптивный сайт
            <img className="portfolio__icon" src={icon} alt="иконка" />
          </li>
        </a>
        <a href="https://github.com/svneste/react-mesto-api-full" target="blank">
          <li className="portfolio__item">
            Одностраничное приложение
            <img className="portfolio__icon" src={icon} alt="иконка" />
          </li>
        </a>
      </ul>
    </section>
  );
}

export default Portfolio;
