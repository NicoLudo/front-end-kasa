import React from 'react';
import Collapse from './Collapse';
import Banner from './Banner';
import bannerBackground from '../assets/images/about-banner.jpg';

function About() {
    return (
        <div>
            <Banner
                backgroundImage={bannerBackground}
            />
            <Collapse title="Fiabilité">
                <p>Texte.</p>
            </Collapse>
            <Collapse title="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse title="Service">
                <p>Texte.</p>
            </Collapse>
            <Collapse title="Sécurité">
                <p>Texte.</p>
            </Collapse>
        </div>
    );
}

export default About;
