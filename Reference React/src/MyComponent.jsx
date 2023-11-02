import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myInputRef = React.createRef();
  }

  focusInput = () => {
    this.myInputRef.current.focus();
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#007BFF',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
    };

    return (
      <div style={containerStyle}>
        <input type="text" ref={this.myInputRef} style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button style={buttonStyle} onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default MyComponent;
