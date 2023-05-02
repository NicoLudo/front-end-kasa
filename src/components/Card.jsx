import React from 'react';

function Card({ cardData }) {
    return (
        <div className="card-container">
            <div className="card-inner">
                <img src={cardData.cover} alt={cardData.title} className="card-image" />
                <div className="card-title-background">
                    <h5 className="card-title">{cardData.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;
