import React from 'react';

export default function BackgroundSection({ imageUrl }) {
  const sectionStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Adjust the height as needed
  };

  return <div style={sectionStyle}>{/* Your content goes here */}</div>;
}
