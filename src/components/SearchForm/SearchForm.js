import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./SearchForm.css";

function SearchForm({ updateMovieList, handleOpenPopup, filtredSaveShortMovies }) {
  const { pathname } = useLocation();

  const [checked, setChecked] = useState(
    localStorage.getItem("checked") === "true"
  );

  const [textSearch, setTextSearch] = useState(
    localStorage.getItem("textSearch")
  );

  function handleChecked() {
    setChecked((prev) => {
      const newChecked = !prev;
      localStorage.setItem("checked", newChecked);
      return newChecked;
    });
    updateMovieList();
  }

  function handleCheckedInSavedMovies(evt) {
    setChecked(!checked);

    filtredSaveShortMovies(checked);
  }

  function handleTextChange(e) {
    const newTextSearch = e.target.value;
    setTextSearch(newTextSearch);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!textSearch) {
      handleOpenPopup("Нужно ввести ключевое слово");
    } else {
      updateMovieList();
      localStorage.setItem("textSearch", textSearch);
    }
  }

  function handleSubmitSearchInSaveMovies(e) {
    e.preventDefault();
    updateMovieList(textSearch);
  }

  return (
    <section className="searchform">
      <form onSubmit={pathname === '/movies' ? handleSubmit : handleSubmitSearchInSaveMovies}className="search">
        <div className="search__input-container">
          <input
            onChange={handleTextChange}
            id="wordsCompare"
            name="wordsCompare"
            className="search__input"
            placeholder="Фильм"
            type="text"
            defaultValue={pathname === '/saved-movies' ? "" : textSearch || ""}
          />
          <button type="submit" className="search__button">
            Найти
          </button>
        </div>

        <label className="search__toogle-container">
          <input
            name="checked"
            defaultChecked={pathname === '/saved-movies' ? false : checked}
            onChange={pathname === '/movies' ? handleChecked : handleCheckedInSavedMovies}
            className="search__checkbox"
            type="checkbox"
          />
          <span className="label-checkbox">Короткометражки</span>
        </label>
      </form>

      <div className="search__line"></div>
    </section>
  );
}

export default SearchForm;
