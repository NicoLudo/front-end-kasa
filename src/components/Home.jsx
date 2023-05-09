import React from 'react';
import Card from './Card';
import Banner from './Banner';
import cardData from '../routes.json';
import bannerBackground from '../assets/images/home-banner.jpg';

function Home() {
    return (
        <div>
            <Banner
                title="Chez vous, partout et ailleurs"
                backgroundImage={bannerBackground}
            />
            <div className="cards-container">
                {cardData.map((card) => (
                    <Card key={card.id} cardData={card} />
                ))}
            </div>
        </div>
    );
}

export default Home;
