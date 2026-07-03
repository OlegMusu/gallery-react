import { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Searchbar/>
        <ImageGallery/>
      </>
    )
  }
}

export default App;
