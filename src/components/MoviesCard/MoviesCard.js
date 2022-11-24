import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MovieCard(props) {
  const { pathname } = useLocation();

  let imageURL;
  let movieCard = props.card;

  if (pathname === "/saved-movies") {
    imageURL = props.card.image;
  } else {
    imageURL = `https://api.nomoreparties.co/${props.card.image.url}`;
  }

  function getMovieDuration(time) {
    return `${Math.floor(time / 60)}ч ${time % 60}м`;
  }

  function addNewMovie() {
    props.handleAddNewMovieCard(props.card);
    props.handleSaveMovie(movieCard);
    props.handleLike(movieCard);
  }

  function deleteCardMovie() {
    props.handleRemoveMovieCard(movieCard._id);
    props.deleteCardInArr(movieCard._id);
  }

  return (
    <li key={props.card.id} className="moviescardlist__item">
      <a
        target="_blank"
        className="moviescardlist__container-pic"
        href={`${props.card.trailerLink}`}
        rel="noreferrer"
      >
        <img src={imageURL} className="moviescardlist__pic" alt="картинка 1" />
      </a>

      {pathname === "/movies" ? (
        <button
          type="button"
          onClick={addNewMovie}
          className={`moviescardlist__savebutton ${
            props.isLike &&
            "moviescardlist__savebutton-hidden moviescardlist-icon"
          }`}
        ></button>
      ) : (
        <button
          type="button"
          onClick={deleteCardMovie}
          className="moviescardlist-icon-delete"
        ></button>
      )}

      {pathname === "/movies"}

      <div className="moviescard__info">
        <p className="moviescard__name">{props.card.nameRU}</p>
        <p className="moviescard__duration">
          {getMovieDuration(props.card.duration)}
        </p>
      </div>
    </li>
  );
}

export default MovieCard;
