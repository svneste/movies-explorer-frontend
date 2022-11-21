import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <p className="notfound__code">404</p>
      <p className="notfound__message">Страница не найдена</p>
      <Link className="notfound__link" to="/">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
