import React, { Component } from 'react';

class ErrorProneComponent extends Component {
  render() {
    try {
      // Simulate an error by calling a non-existent function
      return <div>{this.props.data.nonExistentFunction()}</div>;
    } catch (error) {
      return <div>Error: {error.message}</div>;
    }
  }
}

function App() {
  return (
    <div className="App">
      <h1>Error Handling in React</h1>
      <ErrorProneComponent />
    </div>
  );
}

export default App;
