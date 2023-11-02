import React, { Component } from 'react';

class RefExample extends Component {
  constructor(props) {
    super(props);
    this.myInputRef = React.createRef(); // Create a ref
  }

  focusInput = () => {
    this.myInputRef.current.focus(); // Access and use the ref to focus the input
  }

  render() {
    return (
      <div>
        <h1>React Ref Example</h1>
        <input type="text" ref={this.myInputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default RefExample;
