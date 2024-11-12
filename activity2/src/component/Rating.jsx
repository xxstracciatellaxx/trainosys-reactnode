import React from 'react';

function Star({ filled, color, size, icon }) {
  const starStyle = {
    color: color || 'gold',
    fontSize: size || '24px',
  };

  return <span style={starStyle}>{filled ? icon || '★' : icon || '☆'}</span>;
}

function Rating({ value = 0, maximumValue = 5, color, size, icon }) {
  const stars = Array.from({ length: maximumValue }, (_, index) => (
    <Star
      key={index}
      filled={index < Math.floor(value)}
      color={color}
      size={size}
      icon={icon}
    />
  ));

  return <div>{stars}</div>;
}

export default Rating;