import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './Gallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import Button from './Button/button.jsx';
import Modal from './Modal/Modal.jsx';
import axios from 'axios';
import '.././index.css';
import { useEffect, useState } from 'react';

const KEY = '41214727-6303ae3029c738ec798387c7a';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const search = newSearch => {
    setQuery(newSearch);
    setImages([]);
    setPage(1);
  };

  const fetchData = async () => {
    setIsLoading(true);

    const url = `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    console.log(url);
    try {
      const data = await axios.get(url);
      setImages([...images, ...data.data.hits]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData(query, page);
    }
  }, [query, page]);

  const loadMoreBtn = () => {
    setPage(prev => prev + 1);
  };

  const openModal = imageUrl => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImageUrl('');
    setIsModalOpen(false);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <Searchbar onSubmit={search}></Searchbar>
      <ImageGallery onClick={openModal} images={images} />
      {images.length > 0 && !isLoading && (
        <Button onClick={loadMoreBtn} disabled={false} />
      )}
      <Modal
        isOpen={isModalOpen}
        imageUrl={selectedImageUrl}
        onClose={closeModal}
      />
    </div>
  );
};
export default App;
