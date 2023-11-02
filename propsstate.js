import React, { useState } from 'react';

// Child functional component that receives parameters using props
const Greeting = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>{props.message}</p>
    </div>
  );
}

// Parent functional component that uses states to pass parameters
const App = () => {
  const [greetings] = useState([
    { name: "John", message: "Hope you're enjoying React!" },
    { name: "Jane", message: "React is awesome!" }
  ]);

  return (
    <div>
      <h1>Welcome to React Props Example</h1>
      {greetings.map((greeting, index) => (
        <Greeting key={index} name={greeting.name} message={greeting.message} />
      ))}
    </div>
  );
}

export default App;
