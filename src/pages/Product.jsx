import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../logement.json';
import Slider from '../components/ProductSlider';
import ProductHostInfo from '../components/ProductHostInfo';
import ProductRatingTags from '../components/ProductRatingTags';
import ProductDescriptionEquipments from '../components/ProductDescriptionEquipments';

function Product() {
    const { id } = useParams();

    const [productData, setProductData] = useState(null);

    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        if (productData && productData.pictures) {
            setCurrentSlide((currentSlide) => currentSlide >= productData.pictures.length - 1 ? 0 : currentSlide + 1);
        }
    }, [productData]);

    const prevSlide = useCallback(() => {
        if (productData && productData.pictures) {
            setCurrentSlide((currentSlide) => currentSlide <= 0 ? productData.pictures.length - 1 : currentSlide - 1);
        }
    }, [productData]);

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
            <Slider images={productData.pictures} currentSlide={currentSlide} nextSlide={nextSlide} prevSlide={prevSlide} />
            <ProductHostInfo title={productData.title} location={productData.location} host={productData.host} />
            <ProductRatingTags tags={productData.tags} rating={productData.rating} />
            <ProductDescriptionEquipments description={productData.description} equipments={productData.equipments} />
        </div>
    );
}

export default Product;
