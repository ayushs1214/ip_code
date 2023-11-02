import React from 'react';

const NestedArrowFunctionComponent = () => {
  // An outer arrow function
  const outerFunction = () => {
    // An inner arrow function
    const innerFunction = () => {
      return "Hello from the inner function!";
    };

    return (
      <div>
        <p>Hello from the outer function!</p>
        <p>{innerFunction()}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Nested Arrow Functions in React</h1>
      {outerFunction()}
    </div>
  );
};

export default NestedArrowFunctionComponent;
