import React from 'react';
import Card from './Card';
import Banner from './Banner';
import cardData from '../routes.json';

function Home() {
    return (
        <div>
            <Banner />
            <div className="cards-container">
                {cardData.map((card) => (
                    <Card key={card.id} cardData={card} />
                ))}
            </div>
        </div>
    );
}

export default Home;
