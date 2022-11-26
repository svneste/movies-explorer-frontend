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

  useEffect(() => {
    setIsOpenPreloader(true);
    api
      .getSaveMoviesCard()
      .then((res) => {
        setSaveMoviesCard(res);
        setIsOpenPreloader(false);
        localStorage.setItem("saveFilms", JSON.stringify(res));


      })
      .catch((err) => {
        console.log(err);
        props.handleOpenPopup("Произошла ошибка, возможно проблема с сервером ");
      })
  }, []);

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

  // function deleteCardInArr (id) {
  //   let newArrDeleteCard = [];
  //   console.log(id);
  //   console.log(saveMoviesCard);
  //   saveMoviesCard.forEach(function(obj) {
  //     if (obj._id !== id) {
  //       newArrDeleteCard.push(obj);
  //     } else {
  //       console.log(localStorage.getItem.saveFilms);
  //     }
  //     setSaveMoviesCard(newArrDeleteCard);

  //   })
  // }

   async function removeFavoriteMovie(movie) {
    const favoriteMovie = favoriteMovies.find(
      (someMovie) => someMovie.movieId === movie.id
    );
    if (favoriteMovie) {
      await api.removeMovieCard(favoriteMovie._id);
      await fetchFavoriteMovies();
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
      <SearchForm handleGetMovies={searchInSaveMovies} handleOpenPopup={props.handleOpenPopup} searchShortMovies={searchShortMovies}/>
      <section className="moviescardlist">
        {isOpenPreloader ? (
          <Preloader />
        ) : (
          <ul className="moviescardlist__items">
          {saveMoviesCard.map((item, id) => (
            <MovieCard
              card={item}
              key={id}
              handleRemoveMovieCard={props.handleRemoveMovieCard}
              removeFavoriteMovie={removeFavoriteMovie}
            />
          ))}
        </ul>
        )}

        {/* <div className="moviescardlist__nextmovies">
          <button className="nextmovies__nextmovies-button">Еще</button>
        </div> */}
      </section>
    </section>
  );
}

export default SavedMovies;
