import React, { Component, PropTypes } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

class ImageCarousel extends Component {
    render() {
        let images = this.props.images.map((image) => {
            return {
                original: image
            };
        });

        return (
            <ImageGallery items={images}
                          slideInterval={5000}
                          lazyLoad={true}
                          showThumbnails={false}
                          showBullets={true}
                          autoPlay={true} />
        );
    }
}

ImageCarousel.propTypes = {
    images: PropTypes.array.isRequired
};

export default ImageCarousel;
