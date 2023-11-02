

// Sample data
const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
const obj = {
  a: 1,
  b: 2,
  c: 3,
};







// Function to check even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

// For Loop to check each number in the array
for (let i = 0; i < numbers.length; i++) {
  checkEvenOdd(numbers[i]);
}







// For-in loop
function printObjectProperties(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }

// For-of loop
function sumNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// forEach loop
function printNumbersUsingForEach(numbers) {
  numbers.forEach((number) => {
    console.log(number);
  });
}


// !!!!!
// !!!!!
// MAKE normal, return, rest fns!!!
// !!!!!
// !!!!!


//normal
function meet() {
  console.log("Hello there!");
};


//return
const add = function add(a, b) {
  return a + b;
};

//rest
const sum = function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

// Anonymous function
const multiply = function (a, b) {
  return a * b;
};

// Parameterized function
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Lambda function
const divide = (a, b) => a / b;

//Callback Function
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Calling the callback function
  }
  
  // Callback function to be passed as an argument
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  

 





// Testing the functions





console.log("\nPrinting object properties:");
printObjectProperties(obj);

console.log("\nSum of numbers:", sumNumbers(numbers));

console.log("\nPrinting numbers using forEach:");
printNumbersUsingForEach(numbers);



console.log('functions:');
meet();

console.log(add(3,9));

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));

console.log("\nResult of multiplication:", multiply(3, 5));

console.log("\nResult of power operation:", power(2, 3));

console.log("\nResult of division:", divide(10, 2));

 greet("Arush", sayGoodbye);