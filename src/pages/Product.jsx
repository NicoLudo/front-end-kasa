import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../logement.json';
import Slider from '../components/Carrousel';
import ProductHostRating from '../layouts/ProductHostRating';
import ProductTagsInfo from '../layouts/ProductTagsInfo';
import ProductDescriptionEquipments from '../layouts/ProductDescriptionEquipments';

function Product() {
    const { id } = useParams();

    const [productData, setProductData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const product = data.find((item) => item.id === id);

        if (!product) {
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
            <Slider images={productData.pictures} />
            <div className="host-rating-tags-info">
                <ProductHostRating rating={productData.rating} host={productData.host} />
                <ProductTagsInfo tags={productData.tags} title={productData.title} location={productData.location} />
            </div>
            <ProductDescriptionEquipments description={productData.description} equipments={productData.equipments} />
        </div>
    );
}

export default Product;
