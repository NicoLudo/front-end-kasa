import React, { useState } from 'react';
import Arrow from '../assets/images/collapse-arrow.png';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <button
                className="collapse-title"
                onClick={toggleCollapse}
                data-open={isOpen}
            >
                {title}
                <img
                    className={`collapse-arrow ${isOpen ? 'collapse-arrow--open' : ''}`}
                    src={Arrow}
                    alt="collapse-arrow"
                />
            </button>
            <div className={`collapse-content ${isOpen ? 'collapse-content--open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
