import React, { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm({
  updateMovieList,
  handleOpenPopup,
}) {

  const [checked, setChecked] = useState(localStorage.getItem("checked") === "true");

  const [textSearch, setTextSearch] = useState(localStorage.getItem("textSearch"));

  function handleChecked() {

    setChecked((prev) => {
      const newChecked = !prev;
      localStorage.setItem("checked", newChecked);
      return newChecked;
    })
    updateMovieList();
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

  return (
    <section className="searchform">
      <form onSubmit={handleSubmit} className="search">
        <div className="search__input-container">
          <input
            onChange={handleTextChange}
            id="wordsCompare"
            name="wordsCompare"
            className="search__input"
            placeholder="Фильм"
            type="text"
            value={textSearch || ""}
            required
          />
          <button type="submit" className="search__button">
            Найти
          </button>
        </div>

        <label className="search__toogle-container">
          <input
            name="checked"
            defaultChecked={checked}
            onChange={handleChecked}
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
