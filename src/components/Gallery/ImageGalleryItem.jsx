import { useState } from 'react';
import css from './Gallery.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    onClick(image.largeImageURL);
  };
  return (
    <li className={css.galleryItem} onClick={handleClick}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func,
};
export default ImageGalleryItem;
