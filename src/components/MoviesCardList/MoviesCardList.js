import React from "react";
import "./MoviesCardList.css";
import film1 from "../../images/film1.svg";
import film2 from "../../images/film2.svg";
import film3 from "../../images/film3.svg";
import film4 from "../../images/film4.svg";
import film5 from "../../images/film5.svg";
import film6 from "../../images/film6.svg";
import film7 from "../../images/film7.svg";
import film8 from "../../images/film8.svg";
import film9 from "../../images/film9.svg";
import film10 from "../../images/film10.svg";
import film11 from "../../images/film11.svg";
import film12 from "../../images/film12.svg";
import iconSuccess from "../../images/success.svg";

function MoviesCardList() {
  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__items">
        <li className="moviescardlist__item">
          <img src={film1} className="moviescardlist__pic" alt="картинка 1" />

          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">33 слова о дизайне</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film2} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist-icon"></button>

          <div className="moviescard__info">
            <p className="moviescard__name">Киноальманах «100 лет дизайна»</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>
        <li className="moviescardlist__item">
          <img src={film3} className="moviescardlist__pic" alt="картинка 1" />

          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">В погоне за Бенкси</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film4} className="moviescardlist__pic" alt="картинка 1" />

          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">Баския: Взрыв реальности</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film5} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">Бег это свобода</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film6} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">Книготорговцы</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film7} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">Когда я думаю о Германии ночью</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film8} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">
              Gimme Danger: История Игги и The Stooges
            </p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film9} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>
          <div className="moviescard__info">
            <p className="moviescard__name">
              Дженис: Маленькая девочка грустит
            </p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film10} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">Соберись перед прыжком</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film11} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">
              Пи Джей Харви: A dog called money
            </p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film12} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist__savebutton">Сохранить</button>

          <div className="moviescard__info">
            <p className="moviescard__name">
              По волнам: Искусство звука в кино
            </p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>
      </ul>
      <div className="moviescardlist__nextmovies">
        <button className="nextmovies__nextmovies-button">Еще</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
