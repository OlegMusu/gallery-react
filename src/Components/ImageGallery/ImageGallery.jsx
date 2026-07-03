import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css"

class ImageGallery extends Component {
    render() {

        return(
            <>
                <ul className="gallery">
                    {/* {images.map(image => (
                        <ImageGalleryItem key={image.id} image={image}/>
                    ))} */}
                </ul>
            </>
        )
    }
}

export default ImageGallery