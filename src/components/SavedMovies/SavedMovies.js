import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MovieCard from "../MoviesCard/MoviesCard";
import "./SavedMovies.css";
import api from "../../utils/MainApi";

function SavedMovies(props) {
  const [saveMoviesCard, setSaveMoviesCard] = useState([]);
  let filter = [];

  useEffect(() => {
    api
      .getSaveMoviesCard()
      .then((res) => {
        setSaveMoviesCard(res);
        localStorage.setItem("saveFilms", JSON.stringify(res));
        console.log(res);
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

  function deleteCardInArr (id) {
    let newArrDeleteCard = [];
    console.log(id);
    console.log(saveMoviesCard);
    saveMoviesCard.forEach(function(obj) {
      if (obj._id !== id) {
        newArrDeleteCard.push(obj);
      }
      setSaveMoviesCard(newArrDeleteCard);

    })
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
        <ul className="moviescardlist__items">
          {saveMoviesCard.map((item, id) => (
            <MovieCard
              card={item}
              key={id}
              handleRemoveMovieCard={props.handleRemoveMovieCard}
              deleteCardInArr={deleteCardInArr}
            />
          ))}
        </ul>
        {/* <div className="moviescardlist__nextmovies">
          <button className="nextmovies__nextmovies-button">Еще</button>
        </div> */}
      </section>
    </section>
  );
}

export default SavedMovies;
