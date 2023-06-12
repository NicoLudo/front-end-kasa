import React from 'react';
import Tag from '../components/Tag';

function ProductTagsInfo({ tags, title, location }) {
    return (
        <div className="tags-info">
            <div className="product-title-location">
                <h1 className="product-title">{title}</h1>
                <p className="product-location">{location}</p>
            </div>
            <ul className="product-tags">
                {tags && tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </ul>
        </div>
    );
}

export default ProductTagsInfo;
