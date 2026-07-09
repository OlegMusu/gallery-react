import { Component } from "react";
import "./ImageGalleryItem.css"

class ImageGalleryItem extends Component {
    render() {
        const { image } = this.props;
        return(
            <>
                <li className="gallery-item">
                    <img className="gallery-img" src={image.webformatURL} alt={image.tags} />
                </li>
            </>
        )
    }
}

export default ImageGalleryItem