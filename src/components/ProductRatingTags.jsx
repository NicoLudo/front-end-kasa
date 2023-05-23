import React from 'react';
import RedStar from '../assets/images/red-star.png'
import GreyStar from '../assets/images/grey-star.png'

function ProductRatingTags({ tags, rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        let star = rating <= i ? GreyStar : RedStar
        let alt = rating <= i ? "grey star" : "red star"
        stars.push(<img src={star} key={`grey${i}`} className="rating-stars" alt={alt} />);
    }

    return (
        <div className="product-rating-tags">
            <ul className="product-tags">
                {tags.map((tag, index) => (
                    <li key={index} className="product-tag">{tag}</li>
                ))}
            </ul>
            <div className="product-rating">
                {stars}
            </div>
        </div>
    );
}

export default ProductRatingTags;
