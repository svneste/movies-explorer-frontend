import React, { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm({
  handleGetMovies,
  handleOpenPopup,
  wordsCompare,
  searchShortMovies,
  isChecked,
}) {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    wordsCompare: "",
  });

  function handleChecked(e) {
    const newChecked = !checked;
    setChecked(newChecked);
    searchShortMovies(newChecked);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let { wordsCompare } = data;
    if (wordsCompare === "") {
      handleOpenPopup("Нужно ввести ключевое слово");
    } else {
      handleGetMovies(wordsCompare, checked);
    }
  }

  // useEffect(() => {
  //   setChecked(isChecked);
  // }, [isChecked]);

  return (
    <section className="searchform">
      <form onSubmit={handleSubmit} className="search">
        <div className="search__input-container">
          <input
            onChange={handleChange}
            id="wordsCompare"
            name="wordsCompare"
            className="search__input"
            placeholder="Фильм"
            type="text"
            defaultValue={wordsCompare || ""}
            required
          />
          <button type="submit" className="search__button">
            Найти
          </button>
        </div>

        <label className="search__toogle-container">
          <input
            name="checked"
            //defaultValue='false'
            defaultChecked={checked}
           // checked='checked'
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
