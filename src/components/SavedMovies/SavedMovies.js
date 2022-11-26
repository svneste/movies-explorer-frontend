import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MovieCard from "../MoviesCard/MoviesCard";
import "./SavedMovies.css";
import api from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";


function SavedMovies(props) {
  const [saveMoviesCard, setSaveMoviesCard] = useState([]);
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  let filter = [];
  const checked = localStorage.getItem("checked") === "true";

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

  async function searchInSaveMovies(wordsCompare) {
    if (wordsCompare) {
      filter = saveMoviesCard.filter(function (item) {
        return item.nameRU.toLowerCase().includes(wordsCompare.toLowerCase());
      });
      setSaveMoviesCard(filter);
    } else {
      props.handleOpenPopup('Нужно ввести ключевое слово');
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

  async function updateMovieList() {
    let filtredSaveMovies = [];
    filtredSaveMovies = favoriteMovies.filter((item) => item.duration <= 40);
    setFavoriteMovies(filtredSaveMovies);

  }

  useEffect(() => {
    if (checked) {
      let filtredSaveMovies = [];
      filtredSaveMovies = favoriteMovies.filter((item) => item.duration <= 40);
      setFavoriteMovies(filtredSaveMovies);
    } else {
      fetchFavoriteMovies();
    }

  }, [checked])


  function searchShortMovies(newChecked) {
    if (newChecked) {
      const shortMovies = filterShortMovies();
      setSaveMoviesCard(shortMovies);
    } else {
      setSaveMoviesCard(JSON.parse(localStorage.saveFilms))
      console.log('сработало false');
    }
  }

  function filterShortMovies() {
    console.log('работает чек');
    return saveMoviesCard.filter((item) => item.duration <= 40);
  }

  return (
    <section className="movies">
      <SearchForm handleGetMovies={searchInSaveMovies} handleOpenPopup={props.handleOpenPopup} searchShortMovies={searchShortMovies} updateMovieList={updateMovieList}/>
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
