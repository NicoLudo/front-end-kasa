import React, { useState } from 'react';

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
            </button>
            <div className={`collapse-content ${isOpen ? 'collapse-content--open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
