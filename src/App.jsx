import { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import "./App.css";
import { fetchImages } from "./api";

class App extends Component {
  state = {
    qwery: "",
    images: [],
    page: 1,
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
    fetchImages(qwery, page).then(res => {
      this.setState({
        images: res.hits,
      });
    });
  };

  handleSearch = (query) => {
    this.setState({ qwery: query, images: [], page: 1 });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}

export default App;
