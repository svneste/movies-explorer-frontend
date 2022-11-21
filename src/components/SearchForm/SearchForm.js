import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='searchform'>
      <form className='search'>
        <div className='search__input-container'>
          <input className='search__input' placeholder='Фильм' type='text'/>
          <button className='search__button'>Найти</button>
        </div>


          <label className='search__toogle-container'>
            <input className='search__checkbox' type='checkbox' />
            <span className='label-checkbox'>Короткометражки</span>

          </label>
      </form>

      <div className='search__line'></div>

    </section>
  )
}


export default SearchForm;
