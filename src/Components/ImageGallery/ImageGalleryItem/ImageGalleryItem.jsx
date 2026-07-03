import { Component } from "react";
import "./ImageGalleryItem.css"

class ImageGalleryItem extends Component {
    render() {
        return(
            <>
                <li className="gallery-item">
                    <img className="gallery-img" src="" alt="" />
                </li>
            </>
        )
    }
}

export default ImageGalleryItem