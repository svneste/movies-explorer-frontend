import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import api from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";

function Movies(props) {
  // Список всех фильмов которые пришли с сервера
  const [films, setFilms] = useState([]);
  // Список фильмов которые отвечают параметрам фильтрации
  const [filterMovies, setFilterMovies] = useState([]);
  // Список фильмов которые должны отображать
  const [visibleMovieCards, setVisibleMovieCards] = useState([]);
  // Поисковой запрос
  const [wordsCompare, setWordsCompare] = useState("");
  // Переключатель короткометражек
  const [isChecked, setIsChecked] = useState(false);
  // Массив который содержит короткометражки
  const [shortMovies, setShortMovies] = useState([]);

  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  let filter = [];

  const [conutMovies, setConutMovies] = useState([]);

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
      320: [5, 1],
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

  useEffect(() => {
    if (props.loggedIn) {
      moviesApi
        .getMovies()
        .then((res) => {
          setFilms(res);
        })
        .catch((err) => {
          props.handleOpenPopup(
            "Произошла ошибка, возможно проблема с сервером "
          );
        });
    }
  }, [props.loggedIn]);

  useEffect(() => {
    const filmMovies = localStorage.getItem("films");

    if (filmMovies) {
      setWordsCompare(localStorage.textSearch);
      setIsChecked(localStorage.сhecked);
      setVisibleMovieCards(JSON.parse(localStorage.films));
    }
  }, []);

  //Функция отвечает за нажатие на кнопку еще

  function handleIndex() {
    const spliceFilms = filterMovies;
    const newArr = visibleMovieCards.concat(
      spliceFilms.splice(0, conutMovies[1])
    );
    setVisibleMovieCards(newArr);
    setFilterMovies(spliceFilms);
    console.log(visibleMovieCards);
  }

  function handleGetMovies(wordsCompare, checked) {
    setIsOpenPreloader(true);
    filter = films.filter(function (item) {
      return item.nameRU.toLowerCase().includes(wordsCompare.toLowerCase());
    });

    if (filter.length === 0) {
      props.handleOpenPopup("Ничего не найдено");
      setIsOpenPreloader(false);
    }

    setFilterMovies(filter);
    console.log(filter);

    const showedMovies = filter.splice(0, conutMovies[0]);
    setVisibleMovieCards(showedMovies);
    setIsOpenPreloader(false);
    addFilterMoviesDataInStorage(wordsCompare, checked, showedMovies);
    console.log(filter);
  }

  function addFilterMoviesDataInStorage(wordsCompare, checked, showedMovies) {
    localStorage.setItem("textSearch", wordsCompare);
    localStorage.setItem("films", JSON.stringify(showedMovies));
    localStorage.setItem("checked", checked);
  }

  function searchShortMovies(newChecked) {
    if (newChecked) {
      const shortMovies = filterShortMovies();
      setShortMovies(shortMovies);
      setVisibleMovieCards(shortMovies);
    } else {
      setVisibleMovieCards(JSON.parse(localStorage.films));
    }
  }

  function filterShortMovies() {
    console.log('работает чек');
    return visibleMovieCards.filter((item) => item.duration <= 40);
  }

  return (
    <section className="movies">
      <SearchForm
        handleGetMovies={handleGetMovies}
        handleOpenPopup={props.handleOpenPopup}
        wordsCompare={wordsCompare}
        isChecked={isChecked}
        searchShortMovies={searchShortMovies}
      />
      {isOpenPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movieCard={visibleMovieCards}
          handleAddNewMovieCard={props.handleAddNewMovieCard}
          handleSaveMovie={props.handleSaveMovie}
          handleIndex={handleIndex}
          films={filterMovies}
        />
      )}
    </section>
  );
}

export default Movies;
