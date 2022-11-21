import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="about-project">
      <h2 className="about__title">О проекте</h2>
      <ul className="about__items">
        <li className="about__item">
          <h3 className="about__item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__item-content">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about__item">
          <h3 className="about__item-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__item-content">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="about__progress">
        <div className="about__progress-timeline">
          <h4 className="about__progress-timeline-title">1 неделя</h4>
          <p className="about__progress-timeline-text">Back-end</p>
        </div>

        <div className="about__progress-timeline">
          <h4 className="about__progress-timeline-title about__progress-timeline-title-light">
            4 недели
          </h4>
          <p className="about__progress-timeline-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
