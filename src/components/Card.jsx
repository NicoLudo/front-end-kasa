import React from 'react';

function Card({ cardData }) {
    return (
        <div className="card-container">
            <div className="card-inner">
                <img src={cardData.cover} alt={cardData.title} className="card-image" />
                <div className="card-title-background">
                    <p className="card-title">{cardData.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
