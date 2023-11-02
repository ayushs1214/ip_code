import React, { Component } from 'react';

// Child component that receives parameters using props
class Greeting extends Component {
  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}!</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

// Parent component that renders the child component with props
class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to React Props Example</h1>
        <Greeting name="John" message="Hope you're enjoying React!" />
        <Greeting name="Jane" message="React is awesome!" />
      </div>
    );
  }
}

export default App;
