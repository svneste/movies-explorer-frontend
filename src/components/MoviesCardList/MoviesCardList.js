import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";
function checkMovieFavorite(movies, movie) {
  return movies.some((someMovie) => someMovie.movieId === movie.id);
}

function MoviesCardList({
  favoriteMovies,
  addNewFavoriteMovie,
  removeFavoriteMovie,
  visibleMovies,
  hiddenMovies,
  showMore,
}) {
  const { pathname } = useLocation();

  return (
    <section className="moviescardlist">
      <ul className="moviescardlist__items">
        {Array.isArray(visibleMovies) && visibleMovies.map((item) => (
          <MovieCard
            card={item}
            key={item.id}
            isFavorite={checkMovieFavorite(favoriteMovies, item)}
            handleAddNewMovieCard={addNewFavoriteMovie}
            removeFavoriteMovie={removeFavoriteMovie}
          />
        ))}
      </ul>
      {Array.isArray(hiddenMovies) && hiddenMovies.length > 0 && pathname !== "/saved-movies" && (
        <div className="moviescardlist__nextmovies">
          <button
            type="button"
            onClick={showMore}
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
