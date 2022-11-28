import React from "react";
import "./AboutMe.css";
import avatar from "../../images/avatar.svg";

function AboutMe() {
  return (
    <section className="aboutme" id="about-me">
      <h2 className="about__title">Студент</h2>

      <div className="profile">
        <div className="profile__info">
          <h3 className="profile__name">Виталий</h3>
          <p className="profile__job">Фронтенд-разработчик, 30 лет</p>
          <p className="profile__bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="profile__link" target="_blank" href="https://github.com/svneste">
            Github
          </a>
        </div>

        <div className="profile__avatar">
          <img src={avatar} alt="Аватар автора" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
