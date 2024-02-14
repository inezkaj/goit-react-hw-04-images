import { Component } from 'react';
import css from './Gallery.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;

    return (
      <li
        className={css.galleryItem}
        onClick={() => onClick(image.largeImageURL)}
      >
        <img src={image.webformatURL} alt="" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func,
};
