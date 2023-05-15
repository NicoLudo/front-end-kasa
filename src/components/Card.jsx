import React from 'react';
import { Link } from 'react-router-dom';

function Card({ cardData }) {
    return (
        <Link to={`/product/${cardData.id}`} style={{ textDecoration: 'none' }}>
            <div className="card-container">
                <div className="card-inner">
                    <img src={cardData.cover} alt={cardData.title} className="card-image" />
                    <div className="card-title-background">
                        <p className="card-title">{cardData.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
