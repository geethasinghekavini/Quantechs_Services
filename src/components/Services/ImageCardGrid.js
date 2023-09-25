import React from 'react';
import ImageCard from './ImageCard';
import './ImageCardGrid.css';

const ImageCardGrid = () => {
    const imageCards = [
        {
            imageUrl: "/images/insurance.webp", topic: 'Insurance Software Platforms', text: ' Our end-to-end insurance platforms encompass everything from claims and broker handling to vendor management and invoicing. Built on a customer-centric, modular architecture, these platforms are engineered for adaptability. We accelerate your product development through reusable components and agile methodologies, while our product integration layer seamlessly connects with back-office financial systems.' },
        { imageUrl: '/images/ERP.png', topic: 'ERP Mastery', text: 'We empower businesses to market smarter and sell more effectively. With proven prowess in Microsoft Dynamics, ZOHO, and salesforce.com, we supercharge your sales force and streamline your operations through robust CRM and ERP solutions.' },
        { imageUrl: "/images/content6.webp   ", topic: 'Business Application Development', text: 'In a dynamic business landscape, agility is paramount. We collaborate closely with clients to unravel complex challenges and expedite goal achievement. Our experienced professionals translate your business needs into software solutions using industry-proven technologies.' },
        { imageUrl: "/images/INSURANCE.png", topic: 'Cloud Transformation', text: ' Your on-premise applications hold untapped potential. Our service offerings leverage battle-tested frameworks to create universal, reusable application endpoints. Whether its Cloud or Hybrid Cloud solutions, we maximize the value of your existing assets, helping you thrive in the digital era.' },
        {
            imageUrl: "/images/CRM.png", topic: 'CRM Mastery', text: ' In todays dynamic business landscape, nurturing strong and lasting customer relationships is paramount to success.At Quantechs, we understand the significance of Customer Relationship Management(CRM) and offer comprehensive CRM implementation services to empower your organization with the tools and strategies needed to excel in customer engagement.' },
        { imageUrl: " /images/BUSSINESS.webp", topic: 'Consultation', text: 'In todays rapidly evolving digital landscape, making the right software decisions is critical to the success and growth of your business.At Quantechs, we offer comprehensive software consultation services that empower organizations to navigate the complex world of technology, make informed decisions, and achieve their digital transformation goals.Partner with Quantechs for software consultation services that put you on the path to digital transformation. ' },
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
