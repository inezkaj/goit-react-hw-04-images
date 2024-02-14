import { Component } from 'react';
import ReactModal from 'react-modal';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  render() {
    const { isOpen, imageUrl, onClose } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Modal"
        className={css.modal}
      >
        <div className={css.overlay} onClick={onClose}>
          <div className={css.modal}>
            <img src={imageUrl} alt="" onClick={e => e.stopPropagation()} />
            <button onClick={onClose} className={css.btn}>
              Zamknij
            </button>
          </div>
        </div>
      </ReactModal>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func,
};
