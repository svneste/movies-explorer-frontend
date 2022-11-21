import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import film1 from '../../images/film1.svg';
import film2 from '../../images/film2.svg';
import film3 from '../../images/film3.svg';
import iconSuccess from '../../images/success.svg';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <section className='movies'>
      <SearchForm />
      <section className="moviescardlist">
      <ul className="moviescardlist__items">
        <li className="moviescardlist__item">
          <img src={film1} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist-icon-delete" ></button>
          <div className="moviescard__info">
            <p className="moviescard__name">33 слова о дизайне</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film2} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist-icon-delete" ></button>
          <div className="moviescard__info">
            <p className="moviescard__name">Киноальманах «100 лет дизайна»</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

        <li className="moviescardlist__item">
          <img src={film3} className="moviescardlist__pic" alt="картинка 1" />
          <button className="moviescardlist-icon-delete" ></button>
          <div className="moviescard__info">
            <p className="moviescard__name">В погоне за Бенкси</p>
            <p className="moviescard__duration">1ч 17м</p>
          </div>
        </li>

      </ul>
      <div className="moviescardlist__nextmovies">
        <button className="nextmovies__nextmovies-button">Еще</button>
      </div>
    </section>

    </section>
  )
}


export default SavedMovies;
