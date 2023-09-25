import React from 'react';
import ImageCard from './ImageCard1';
import './ImageCardGrid1.css';

const ImageCardGrid = () => {
    const imageCards = [
        {
            imageUrl: "/images/p1.png", topic: 'Insurance Broker Portal', text: ' Lorem ipsum dolor sit amet. Et temporibus molestiae nam earum quia aut quas deleniti ut quis voluptatibus. In dolores sapiente quo soluta aliquam ut iure rerum in odio quae est eaque fugit.'
        },
        { imageUrl: "/images/p2.png", topic: 'Insurance Management Platform', text: 'Lorem ipsum dolor sit amet. Et temporibus molestiae nam earum quia aut quas deleniti ut quis voluptatibus. In dolores sapiente quo soluta aliquam ut iure rerum in odio quae est eaque fugit.' },
        { imageUrl: "/images/p3.png", topic: 'CaseLife', text: 'Workers compensation case management Software.' },
        { imageUrl: "/images/p4.png", topic: 'Enterprise Reporting', text: ' Your on-premise applications hold untapped potential. Our service offerings leverage battle-tested frameworks to create universal, reusable application endpoints. Whether its Cloud or Hybrid Cloud solutions, we maximize the value of your existing assets, helping you thrive in the digital era.' },
        { imageUrl: "/images/p5.png", topic: 'Travel Insurance', text: 'Travel Insurance policy application and life cycle management. ' },
        { imageUrl: "/images/p6.png", topic: 'HR Management Platform', text: 'Lorem ipsum dolor sit amet. Et temporibus molestiae nam earum quia aut quas deleniti ut quis voluptatibus. In dolores sapiente quo soluta aliquam ut iure rerum in odio quae est eaque fugit. ' },
    ];

    return (
        <div className="image-card-grid">
            {imageCards.map((card, index) => (
                <ImageCard key={index} imageUrl={card.imageUrl} topic={card.topic} text={card.text} />
            ))}
        </div>
    );
};

export default ImageCardGrid;
