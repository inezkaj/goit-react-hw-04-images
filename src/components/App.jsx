import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './Gallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import Button from './Button/button.jsx';
import Modal from './Modal/Modal.jsx';
import axios from 'axios';
import '.././index.css';

const KEY = '41214727-6303ae3029c738ec798387c7a';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      images: [],
      page: 1,
      selectedImageUrl: '',
      isModalOpen: false,
      isLoading: false,
    };

    this.search = this.search.bind(this);
  }

  search(query) {
    console.log(query);
    this.setState({ query: query });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.query !== prevState.query) {
      console.log('query updated!');

      this.setState({
        images: [],
        page: 1,
      });
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({ isLoading: true });

    const url = `${BASE_URL}?q=${this.state.query}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      console.log(this.state);
      const data = await axios.get(url);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.data.hits],
          page: prevState.page + 1,
        };
      });
      console.log(this.state);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreBtn = () => {
    this.fetchData();
  };

  openModal = imageUrl => {
    this.setState({
      selectedImageUrl: imageUrl,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImageUrl: '',
      isModalOpen: false,
    });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.search}></Searchbar>
        <ImageGallery onClick={this.openModal} images={images} />
        {images.length > 0 && !isLoading && (
          <Button onClick={this.loadMoreBtn} disabled={false} />
        )}
        <Modal
          isOpen={this.state.isModalOpen}
          imageUrl={this.state.selectedImageUrl}
          onClose={this.closeModal}
        />
      </div>
    );
  }
}
