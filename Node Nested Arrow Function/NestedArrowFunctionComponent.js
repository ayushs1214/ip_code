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
