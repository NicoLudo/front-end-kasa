import React from 'react';

function Banner({ title, backgroundImage }) {
    return (
        <div className="banner-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="banner-title">{title}</h1>
        </div>
    );
}

export default Banner;
