import React, { useState, useEffect } from 'react';

const Counter = () => {
  const savedCounterValue = localStorage.getItem('counterValue');
  const initialValue = savedCounterValue ? parseInt(savedCounterValue) : 0;

  const [counter, setCounter] = useState(initialValue);
  const [step, setStep] = useState(1); 


  useEffect(() => {
    localStorage.setItem('counterValue', counter);
  }, [counter]);


  const increment = () => setCounter(prevCounter => prevCounter + step);
  const decrement = () => setCounter(prevCounter => prevCounter - step);

  const handleStepChange = (event) => {
    const newStep = parseInt(event.target.value, 10);
    if (!isNaN(newStep) && newStep > 0) {
      setStep(newStep);
    }
  };

  const counterStyle = {
    color: counter < 0 ? 'red' : counter > 10? 'green' : 'black',
    fontSize: '2rem',
    margin: '10px',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={counterStyle}>Counter: {counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          Skip Count: 
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
            style={{ width: '50px', marginLeft: '10px' }}
          />
        </label>
      </div>
    </div>
  );
};

export default Counter;