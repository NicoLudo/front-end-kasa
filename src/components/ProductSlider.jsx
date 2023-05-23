import React from 'react';
import whiteArrow from '../assets/images/white-arrow-right.png';

function Slider({ images, currentSlide, nextSlide, prevSlide }) {
    return (
        <div className="product-pictures">
            <img src={images[currentSlide]} alt={`product ${currentSlide}`} className="product-picture" />

            <button onClick={prevSlide} className="slide-button slide-left">
                <img src={whiteArrow} alt="Previous slide" />
            </button>
            <button onClick={nextSlide} className="slide-button slide-right">
                <img src={whiteArrow} alt="Next slide" />
            </button>
            <div className="slider-indicator">
                {images.length > 1 ? `${currentSlide + 1} / ${images.length}` : ""}
            </div>
        </div>
    );
}

export default Slider;
