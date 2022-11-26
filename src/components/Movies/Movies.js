import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import Preloader from "../Preloader/Preloader";
import api from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";

function Movies(props) {
  const [films, setFilms] = useState([]);
  const [saveMovies, setSaveMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [visibleMovieCards, setVisibleMovieCards] = useState([]);
  const [wordsCompare, setWordsCompare] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [shortMovies, setShortMovies] = useState([]);
  const [isOpenPreloader, setIsOpenPreloader] = useState(false);
  const [conutMovies, setConutMovies] = useState([]);
  const [addLikeCard, setAddLikeCard] = useState(false);

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
    let dataLocalFilter = localStorage.getItem('films');

    if (dataLocalFilter) {
      setWordsCompare(localStorage.textSearch);
      setIsChecked(localStorage.сhecked);
      setVisibleMovieCards(JSON.parse(localStorage.films));
      setFilms(JSON.parse(localStorage.allFilms));
    } else {
      console.log('Пустое хранилище');
    }
  }, []);

  useEffect(() => {
    api
      .getSaveMoviesCard()
      .then((res) => {
        setSaveMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  async function handleGetMovies(wordsCompare, checked) {
    if (!localStorage.getItem("allFilms")) {
      try {
        setIsOpenPreloader(true);

        const allFilms = await moviesApi.getMovies();
        setFilms(allFilms);

        addAllMoviesInLocalStorage(allFilms);

        handleFilterMovies(wordsCompare, checked);

        setIsOpenPreloader(false);
      } catch (err) {
        console.log("Асинхронная функция завершилась с ошибкой" + err);
      }
    } else {
      let dataLocalAllFilms = JSON.parse((localStorage.allFilms));
      setFilms(dataLocalAllFilms);
      handleFilterMovies(wordsCompare, checked);
    }
  }

  function handleFilterMovies(wordsCompare, checked) {
    let filter = [];
    filter = films.filter(function (item) {
      return item.nameRU.toLowerCase().includes(wordsCompare.toLowerCase());
    });
    if (filter.length === 0) {
      props.handleOpenPopup("Ничего не найдено");
    }
    addFilterReqInLocalStorage(wordsCompare, checked, filter);

    setFilterMovies(filter);

    const showedMovies = filter.splice(0, conutMovies[0]);
    setVisibleMovieCards(showedMovies);
  }

  function addAllMoviesInLocalStorage(allFilms) {
    localStorage.setItem("allFilms", JSON.stringify(allFilms));
  }

  function addFilterReqInLocalStorage(wordsCompare, checked, filter) {
    localStorage.setItem("textSearch", wordsCompare);
    localStorage.setItem("films", JSON.stringify(filter));
    localStorage.setItem("checked", checked);
  }

    function handleIndex() {
      const spliceFilms = filterMovies;
      const newArr = visibleMovieCards.concat(
        spliceFilms.splice(0, conutMovies[1])
      );
      setVisibleMovieCards(newArr);
      setFilterMovies(spliceFilms);

    }

  async function handleAddNewMovieCard(movieCard) {
    // console.log(movieCard.id);
    // console.log(saveMovies);
    // console.log(films);
    try {
      await api.addNewMovie(movieCard);
      const newArrSaveCards = await api.getSaveMoviesCard();
      setSaveMovies(newArrSaveCards);
    } catch (err) {
      props.handleOpenPopup('При сохранении карточки возникла ошибка');
    }

    saveMovies.map((c) => {
      if (c.id === movieCard.id) {
        setAddLikeCard(true);
      }
    })
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
    console.log("работает чек");
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
          handleSaveMovie={props.handleSaveMovie}
          handleIndex={handleIndex}
          films={filterMovies}
          addLikeCard={addLikeCard}
          handleAddNewMovieCard={handleAddNewMovieCard}
          saveMovies={saveMovies}
        />
      )}
    </section>
  );
}

export default Movies;
