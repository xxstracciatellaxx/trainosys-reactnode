import React, { useState } from 'react';

const ColorPicker = () => {

  const [color, setColor] = useState('red');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div style={{ display: 'flex',textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{padding: '10px', marginTop: '20px'}}>Choose a Color: </h1>
      <select value={color} onChange={handleColorChange} style={{ height: '40px',marginTop: '45px',padding: '10px', fontSize: '16px' }}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>
      <div
        style={{
          borderRadius: '10px',
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: color,
          margin: 'auto',
          marginLeft: '10px',
          border: '1px solid black',
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;