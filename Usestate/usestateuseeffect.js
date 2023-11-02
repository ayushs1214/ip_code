import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0); // State for the counter

  // Function to increment the counter
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Effect to increment the counter every second
  useEffect(() => {
    const intervalId = setInterval(incrementCount, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [count]); // Add 'count' as a dependency to re-run the effect on count changes

  return (
    <div className="App">
      <h1>Counter with useState and useEffect</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
