import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const [isLike, setIsLike] = useState(false);
  const { pathname } = useLocation();

  function handleIndex() {
    props.handleIndex();
  }

  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__items">
        {props.movieCard.map((item, id) => (
          <MovieCard
            card={item}
            key={id}
            handleSaveMovie={props.handleSaveMovie}
            isLike={isLike}
            saveMovies={props.saveMovies}
            handleSaceMovies={props.handleSaceMovies}
            addLikeCard={props.addLikeCard}
            handleAddNewMovieCard={props.handleAddNewMovieCard}
            films={props.films}
          />
        ))}
      </ul>
      {props.films.length > 0 && pathname !== "/saved-movies" && (
        <div className="moviescardlist__nextmovies">
          <button
            type="button"
            onClick={handleIndex}
            className="nextmovies__nextmovies-button"
          >
            Еще
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
