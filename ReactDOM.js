import React from 'react';
import ReactDOM from 'react-dom';

// React component
function App() {
  return (
    <div>
      <h1>Hello, React with ReactDOM.render()</h1>
    </div>
  );
}

// Render the component using ReactDOM.render()
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
