// import css from './contact.module.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    let query = form.elements[1].value;
    onSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchBtn}>
          <span className={css.btnLabel}>Search</span>
        </button>

        <input
          className={css.inputSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={eve => setQuery(eve.target.value)}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
export default Searchbar;
