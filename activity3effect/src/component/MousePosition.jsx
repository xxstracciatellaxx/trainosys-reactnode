import React, { useState, useEffect } from 'react';

function MousePosition() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        function handleMouseMove(evt) {
            setPosition({ x: evt.clientX, y: evt.clientY });
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    },
        []);
    return (
        <div>
            <p style={{color: 'black', fontWeight: 'bold'}}>Mouse Position </p>
            <p> X: {position.x}, Y: {position.y}</p>
        </div>
    );
}

export default MousePosition;