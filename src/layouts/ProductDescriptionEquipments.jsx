import React from 'react';
import Collapse from '../components/Collapse';

function ProductDescriptionEquipments({ description, equipments }) {
    return (
        <div className="product-description-equipements">
            <Collapse title="Description">
                <p className="product-description">{description}</p>
            </Collapse>
            <Collapse title="Équipements">
                <ul className="product-equipments">
                    {equipments.map((equipment, index) => (
                        <li key={index} className="product-equipment">{equipment}</li>
                    ))}
                </ul>
            </Collapse>
        </div>
    );
}

export default ProductDescriptionEquipments;