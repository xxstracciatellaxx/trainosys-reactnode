import React, { useState } from 'react';

function LightSwitch() {
    const [isLightOn, setLight] = useState(false);

    function toggler() {
        setLight(!isLightOn);
    }

    return (
        <div style={{
            textAlign: 'center', backgroundColor: isLightOn ? 'yellow' : 'gray',
            width: '100%'
        }}>
            <p style={{ fontWeight: 'bold' }}>{isLightOn ? 'The light is ON' : 'The light is OFF'}</p>

            <img
                src={isLightOn ? 'https://img.icons8.com/?size=100&id=kDPHHp80u2xF&format=png&color=000000' : 'https://img.icons8.com/?size=100&id=19188&format=png&color=000000'}
                alt="Lightbulb"
                style={{ width: '100px', height: '100px' }}
            />
            <br></br>
            <button onClick={toggler} style={{ marginBottom: '10px' }}>
                Toggle Light
            </button>

        </div>
    );
}
export default LightSwitch;

