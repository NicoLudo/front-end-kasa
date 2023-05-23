import React from 'react';

function ProductHostInfo({ title, location, host }) {
    return (
        <div className="product-host-info">
            <div className="product-title-location">
                <h1 className="product-title">{title}</h1>
                <p className="product-location">{location}</p>
            </div>
            <div className="host-info">
                <p className="host-name">{host.name}</p>
                <img src={host.picture} alt={host.name} className="host-picture" />
            </div>
        </div>
    );
}

export default ProductHostInfo;
