import React, { useState, useEffect } from 'react';

function RandomColor() {
    const [color, setColor] = useState('red');


    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(getRandomColor());
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div style={{ backgroundColor: color, height: '50px', width: '150px', margin: '20px auto' }}>
            <p style={{ color: '#fff', textAlign: 'center' }}>Random Color: {color}</p>
        </div>
    );
}

export default RandomColor;