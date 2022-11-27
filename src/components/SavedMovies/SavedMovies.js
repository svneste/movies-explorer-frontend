import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MovieCard from "../MoviesCard/MoviesCard";
import "./SavedMovies.css";
import api from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  let filter = [];
  const checked = localStorage.getItem("checked") === "true";
  const textSearch = localStorage.getItem("textSearch") || "";

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  async function fetchFavoriteMovies() {
    try {
      const favoriteMovies = await api.getSaveMoviesCard();
      setFavoriteMovies(favoriteMovies);
    } catch (err) {
      props.handleOpenPopup("При сохранении карточки возникла ошибка");
    }
  }

  async function removeFavoriteMovie(movie) {
    const favoriteMovie = favoriteMovies.find(
      (someMovie) => someMovie.movieId === movie.movieId
    );
    if (favoriteMovie) {
      await api.removeMovieCard(favoriteMovie._id);
      await fetchFavoriteMovies();
    }
  }

  async function updateMovieList(textSearch) {
    let filteredMovies = [];
    let filtredSaveMovies = [];
    filtredSaveMovies = favoriteMovies.filter((item) => item.duration <= 40);
    console.log(filtredSaveMovies);
    setFavoriteMovies(filtredSaveMovies);
    if (textSearch !== "") {
      filteredMovies = favoriteMovies.filter(function (item) {
        return item.nameRU.toLowerCase().includes(textSearch.toLowerCase().trim());
      })
      setFavoriteMovies(filteredMovies);
    } else {
      fetchFavoriteMovies();
    }
  }

  return (
    <section className="movies">
      <SearchForm
        handleOpenPopup={props.handleOpenPopup}
        updateMovieList={updateMovieList}
      />
      <section className="moviescardlist">
        {isOpenPreloader ? (
          <Preloader />
        ) : (
          <ul className="moviescardlist__items">
            {favoriteMovies.map((item, id) => (
              <MovieCard
                card={item}
                key={id}
                removeFavoriteMovie={removeFavoriteMovie}
              />
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}

export default SavedMovies;
