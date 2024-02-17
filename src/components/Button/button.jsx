import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './button.module.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={css.buttonLM}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
export default Button;
