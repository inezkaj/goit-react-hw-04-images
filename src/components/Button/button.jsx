import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './button.module.css';

export default class Button extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <button onClick={onClick} disabled={disabled} className={css.buttonLM}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
