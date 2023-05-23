import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import cardData from '../logement.json';
import bannerBackground from '../assets/images/home-banner.png';

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
