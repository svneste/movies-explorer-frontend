import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>

      <div className="footer__nav">
        <div className="footer__copyright">&copy; 2022</div>
        <nav>
          <ul className="footer__links">
            <li className="footer__item">
              <a
                href="https://practicum.yandex.ru/"
                target="_blank"
                className="footer__link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://github.com/"
                target="_blank"
                className="footer__link"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
