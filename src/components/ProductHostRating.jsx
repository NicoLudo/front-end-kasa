import React from 'react';
import RedStar from '../assets/images/red-star.png'
import GreyStar from '../assets/images/grey-star.png'

function ProductHostRating({ rating, host }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        let star = rating <= i ? GreyStar : RedStar
        let alt = rating <= i ? "grey star" : "red star"
        stars.push(<img src={star} key={`grey${i}`} className="rating-stars" alt={alt} />);
    }

    return (
        <div className="host-rating">
            <div className="host-info">
                <p className="host-name">{host.name}</p>
                <img src={host.picture} alt={host.name} className="host-picture" />
            </div>
            <div className="product-rating">
                {stars}
            </div>
        </div>
    );
}

export default ProductHostRating;
