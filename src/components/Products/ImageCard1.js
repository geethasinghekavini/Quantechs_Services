import React from 'react';
import './ImageCard1.css';

const ImageCard = ({ imageUrl, /*topic,*/ text }) => {
    return (
        <div className="image-card">
            <img className="image" src={imageUrl} alt="Image" />
            <div className="overlay">
               {/* <div className="topic">{topic}</div>*/}
                <div className="text">{text}</div>
            </div>
        </div>
    );
};

export default ImageCard;

