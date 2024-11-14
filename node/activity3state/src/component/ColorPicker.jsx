import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('red');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="heading">Choose a Color:</h1>
      <select
        value={color}
        onChange={handleColorChange}
        className="select"
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ColorPicker;