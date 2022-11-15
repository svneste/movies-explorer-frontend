import React from "react";
import "./Portfolio.css";
import icon from "../../images/icon.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a href="https://github.com/svneste/how-to-learn" target="blank">
            Статичный сайт
            <img className="portfolio__icon" src={icon} alt="иконка" />
          </a>
        </li>

        <li className="portfolio__item">
          <a href="https://github.com/svneste/sprint3-travel" target="blank">
            Адаптивный сайт
            <img className="portfolio__icon" src={icon} alt="иконка" />
          </a>
        </li>

        <li className="portfolio__item">
          <a
            href="https://github.com/svneste/react-mesto-api-full"
            target="blank"
          >
            Одностраничное приложение
            <img className="portfolio__icon" src={icon} alt="иконка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
