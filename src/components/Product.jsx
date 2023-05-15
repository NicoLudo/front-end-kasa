import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../logement.json';
import whiteArrow from '../assets/images/white-arrow-right.png';

function Product() {
    const { id } = useParams();

    const [productData, setProductData] = useState(null);

    const navigate = useNavigate();

    // slider
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const newIndex = currentSlide + 1;
        setCurrentSlide(newIndex >= productData.pictures.length ? 0 : newIndex);
    }

    const prevSlide = () => {
        const newIndex = currentSlide - 1;
        setCurrentSlide(newIndex < 0 ? productData.pictures.length - 1 : newIndex);
    }

    useEffect(() => {
        const product = data.find((item) => item.id === id);

        if (!product) {
            console.error('Logement introuvable');
            setProductData({});
            navigate('/404');
            return;
        }

        setProductData(product);
    }, [id, navigate]);

    if (!productData) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="product-container">

            {/* slider, pictures */}
            <div className="product-pictures">
                <img src={productData.pictures[currentSlide]} alt={`product ${currentSlide}`} className="product-picture" />

                <button onClick={prevSlide} className="slide-button slide-left">
                    <img src={whiteArrow} alt="Previous slide" />
                </button>
                <button onClick={nextSlide} className="slide-button slide-right">
                    <img src={whiteArrow} alt="Next slide" />
                </button>
                <div className="slider-indicator">
                    {currentSlide + 1} / {productData.pictures.length}
                </div>
            </div>

            {/* title, location, host profile */}
            <div>
                <div>
                    <h1 className="product-title">{productData.title}</h1>
                    <p className="product-location">{productData.location}</p>
                </div>

                <div className="host-info">
                    <p className="host-name">{productData.host.name}</p>
                    <img src={productData.host.picture} alt={productData.host.name} className="host-picture" />
                </div>
            </div>

            {/* rating, tags */}
            <div>
                <p className="product-rating">{productData.rating}</p>

                <ul className="product-tags">
                    {productData.tags.map((tag, index) => (
                        <li key={index} className="product-tag">{tag}</li>
                    ))}
                </ul>
            </div>

            {/* description, equipments */}
            <div>
                <p className="product-description">{productData.description}</p>

                <ul className="product-equipments">
                    {productData.equipments.map((equipment, index) => (
                        <li key={index} className="product-equipment">{equipment}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Product;
