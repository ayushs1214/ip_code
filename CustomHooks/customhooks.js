import React, { useState } from 'react';

// Custom hook to manage a counter
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

// Component that uses the custom counter hook
function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Custom Hook Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <CounterComponent />
    </div>
  );
}

export default App;
