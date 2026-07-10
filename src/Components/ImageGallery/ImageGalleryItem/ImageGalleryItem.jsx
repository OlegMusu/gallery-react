import { Component } from "react";
import "./ImageGalleryItem.css";

class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;
    return (
      <>
        <li className="gallery-item">
          <img
            className="gallery-img"
            src={image.webformatURL}
            alt={image.tags}
            onClick={()=>{
              onClick(image.largeImageURL);
            }}
          />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
