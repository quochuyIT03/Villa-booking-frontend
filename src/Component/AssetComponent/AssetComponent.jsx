import React, { useEffect, useState } from 'react';
import './AssetComponent.css';

const AssetComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 800) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="buttons-container">
            {isVisible && (
                <button onClick={scrollToTop} className="to-top-button">
                    ↑
                </button>
            )}
            <a href="tel:0797744819" className="call-button">
                📞
            </a>
        </div>
    );
};

export default AssetComponent;
