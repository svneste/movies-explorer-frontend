import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import api from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";

function Movies(props) {
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const [conutMovies, setConutMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [hiddenMovies, setHiddenMovies] = useState([]);

  useEffect(() => {
    let localStorageAllMovies = localStorage.getItem("allMovies");
    if (localStorageAllMovies) {
      setAllMovies(JSON.parse(localStorageAllMovies));
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(allMovies) && allMovies.length > 0) {
      const checked = localStorage.getItem("checked") === "true";
      const textSearch = localStorage.getItem("textSearch") || "";
      let filteredMovies = [];
      if (textSearch !== "") {
        filteredMovies = allMovies.filter(function (item) {
          return item.nameRU
            .toLowerCase()
            .includes(textSearch.toLowerCase().trim());
        });
      }
      if (filteredMovies.length === 0) {
        props.handleOpenPopup("Ничего не найдено");
      };

      if (checked) {
        setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40));
      } else {
        setFilteredMovies(filteredMovies);
      }
    }
  }, [allMovies]);

  useEffect(() => {
    const clonedFilteredMovies = [...filteredMovies];

    const visibleMovies = clonedFilteredMovies.splice(0, conutMovies[0]);
    setVisibleMovies(visibleMovies);

    setHiddenMovies(clonedFilteredMovies);
  }, [filteredMovies, conutMovies]);

  useEffect(() => {
    setConutMovies(getMoviesCount());
    const handleResize = () => setConutMovies(getMoviesCount());
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getMoviesCount() {
    let countElement;
    const clientWidth = document.documentElement.clientWidth;
    const MoviesConfig = {
      1280: [12, 3],
      758: [8, 2],
      320: [5, 2],
    };

    Object.keys(MoviesConfig)
      .sort((a, b) => a - b)
      .forEach((key) => {
        if (clientWidth > +key) {
          countElement = MoviesConfig[key];
        }
      });
    return countElement;
  }

  async function updateMovieList() {
    if (!localStorage.getItem("allMovies")) {
      try {
        setIsOpenPreloader(true);
        const allMovies = await moviesApi.getMovies();
        setAllMovies(allMovies);
        localStorage.setItem("allMovies", JSON.stringify(allMovies));
        setIsOpenPreloader(false);
      } catch (err) {
        console.log("Асинхронная функция завершилась с ошибкой" + err);
      }
    } else {
      const allMoviesLocalStorage = JSON.parse(localStorage.getItem("allMovies"));
      setAllMovies(allMoviesLocalStorage);
    }
  }

  function showMore() {
    const clonedFilteredMovies = [...filteredMovies];
    const newVisibleMovies = clonedFilteredMovies.splice(0, conutMovies[1] + visibleMovies.length);
    setVisibleMovies(newVisibleMovies);
    setHiddenMovies(clonedFilteredMovies);
  }

  async function addNewFavoriteMovie(movie) {
    try {
      await api.addNewMovie(movie);
      await fetchFavoriteMovies();
    } catch (err) {
      props.handleOpenPopup("При сохранении карточки возникла ошибка");
    }
  }

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
      (someMovie) => someMovie.movieId === movie.id
    );
    if (favoriteMovie) {
      await api.removeMonnnnnnnnvieCard(favoriteMovie._id);
      await fetchFavoriteMovies();
    }
  }

  return (
    <section className="movies">
      <SearchForm
        handleOpenPopup={props.handleOpenPopup}
        updateMovieList={updateMovieList}
      />
      {isOpenPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          favoriteMovies={favoriteMovies}
          addNewFavoriteMovie={addNewFavoriteMovie}
          removeFavoriteMovie={removeFavoriteMovie}
          visibleMovies={visibleMovies}
          hiddenMovies={hiddenMovies}
          showMore={showMore}
        />
      )}
    </section>
  );
}

export default Movies;
