// import css from './contact.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    let query = form.elements[1].value;

    this.props.onSubmit(query);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchBtn}>
            <span className={css.btnLabel}>Search</span>
          </button>

          <input
            className={css.inputSearch}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={eve => this.setState({ query: eve.target.value })}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
