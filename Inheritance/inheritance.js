// Parent constructor function
function Animal(name) {
  this.name = name;
}

// Add a method to the parent prototype
Animal.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}.`);
}

// Child constructor function
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor with 'this' context
  this.breed = breed;
}

// Inherit from the parent prototype
Dog.prototype = Object.create(Animal.prototype);

// Add a method to the child prototype
Dog.prototype.bark = function() {
  console.log(`${this.name} is barking.`);
}

// Create instances
const animal = new Animal('Generic Animal');
const dog = new Dog('Buddy', 'Golden Retriever');

// Use the inherited methods
animal.sayHello(); // Output: Hello, I'm Generic Animal.
dog.sayHello();    // Output: Hello, I'm Buddy.
dog.bark();        // Output: Buddy is barking.
