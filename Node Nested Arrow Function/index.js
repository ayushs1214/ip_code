// Import the component (if needed)
const NestedArrowFunctionComponent = require('./NestedArrowFunctionComponent');

// Simulate rendering the component (for demonstration purposes)
const renderComponent = () => {
  console.log('Simulating rendering NestedArrowFunctionComponent...');

  const outerFunction = () => {
    const innerFunction = () => {
      return "Hello from the inner function!";
    };

    return `
      Hello from the outer function!
      ${innerFunction()}
    `;
  };

  const result = `
    Nested Arrow Functions in Node.js

    ${outerFunction()}
  `;

  console.log(result);
};

// Call the renderComponent function (if needed)
renderComponent();
