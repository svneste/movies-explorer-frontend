import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const [isLike, setIsLike] = useState(false);
  const { pathname } = useLocation();

  function handleLike(card) {
    setIsLike(!isLike);
    console.log(card);
  }

  function handleIndex() {
    props.handleIndex();
  }

  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__items">
        {props.movieCard.map((item, id) => (
          <MovieCard
            handleAddNewMovieCard={props.handleAddNewMovieCard}
            card={item}
            key={id}
            handleSaveMovie={props.handleSaveMovie}
            handleLike={handleLike}
            isLike={isLike}
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
