import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

class ImageGallery extends Component {
  render() {
    const { images, onImgClick } = this.props;

    return (
      <>
        <ul className="gallery">
          {images?.map((image) => (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClick={onImgClick}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
