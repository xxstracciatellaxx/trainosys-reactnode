import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Current count:', count);
  }, [count]); 
  return (
    <div>
      <p style={{color: 'black', fontWeight: 'bold'}}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;