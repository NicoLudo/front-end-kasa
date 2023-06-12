import React, { useState, useEffect } from 'react';
import whiteArrow from '../assets/images/white-arrow-right.png';

function Slider({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => prev >= images.length - 1 ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => prev <= 0 ? images.length - 1 : prev - 1);
    };

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, [images]);

    return (
        <div className="product-pictures">
            <img src={images[currentSlide]} alt={`product ${currentSlide}`} className="product-picture" />
            {
                images.length > 1 && (
                    <>
                        <button onClick={prevSlide} className="slide-button slide-left">
                            <img src={whiteArrow} alt="Previous slide" />
                        </button>
                        <button onClick={nextSlide} className="slide-button slide-right">
                            <img src={whiteArrow} alt="Next slide" />
                        </button>
                        <div className="slider-indicator">
                            {`${currentSlide + 1} / ${images.length}`}
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Slider;
