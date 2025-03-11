import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="image-container">
                <img 
                    src="/homepage.jpg"
                    alt="Michael Stewart"
                    className="profile-image"
                />
            </div>
        </div>
    )
}

export default HomePage