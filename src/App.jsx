import { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import "./App.css";
import { fetchImages } from "./api";

class App extends Component {
  state = {
    qwery: "",
    images: [],
    page: 1,
    loading: false,
    imagePick: null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.qwery !== this.state.qwery) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const { qwery, page } = this.state;
    if (qwery === "") {
      return;
    }

    this.setState({ loading: true });

    fetchImages(qwery, page)
      .then((res) => {
        this.setState((prev) => {
          return { images: [...prev.images, ...res.hits] };
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleSearch = (query) => {
    this.setState({ qwery: query, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState((prev) => {
      return { page: prev.page + 1 }
    }, () => {
      this.loadImages();
    });
  };

  openModal = (largeImageURL) => {
    this.setState({ imagePick: largeImageURL });
  }

  closeModal = () => {
    this.setState({ imagePick: null });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.loading && <Loader />}
        <ImageGallery images={this.state.images} onImgClick={this.openModal} />
        {this.state.images.length > 0 && <Button onClick={this.loadMore} />}
        {this.state.imagePick && <Modal image={this.state.imagePick} onClose={this.closeModal} />}
      </>
    );
  }
}

export default App;
