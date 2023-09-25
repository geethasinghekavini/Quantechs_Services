import React from 'react';

const BlueRectangle = ({  title, content }) => {
    //image,

    const rectangleStyle = {
        width: '300px',
        height: '250px',
        backgroundColor: '#A1C2F1',
        margin: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        border: '4px solid darkblue',
    };

    return (
        <div style={rectangleStyle}>
            {/*{image && <img src={process.env.PUBLIC_URL + '/' + image} alt="Rectangle Image" style={{ width: '100%', maxHeight: '80px', objectFit: 'contain' }} />}*/}
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default BlueRectangle;
