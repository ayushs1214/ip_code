import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      emailInput: '',
      passwordInput: '',
      textareaInput: '',
      selectInput: 'option1',
      checkboxInput: false,
      radioInput: 'optionA',
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: inputValue,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>React Form with Different Input Types</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="textInput">Text Input:</label>
            <input
              type="text"
              id="textInput"
              name="textInput"
              value={this.state.textInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="emailInput">Email Input:</label>
            <input
              type="email"
              id="emailInput"
              name="emailInput"
              value={this.state.emailInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="passwordInput">Password Input:</label>
            <input
              type="password"
              id="passwordInput"
              name="passwordInput"
              value={this.state.passwordInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="textareaInput">Textarea:</label>
            <textarea
              id="textareaInput"
              name="textareaInput"
              value={this.state.textareaInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="selectInput">Select Input:</label>
            <select
              id="selectInput"
              name="selectInput"
              value={this.state.selectInput}
              onChange={this.handleChange}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="checkboxInput"
                checked={this.state.checkboxInput}
                onChange={this.handleChange}
              />
              Checkbox Input
            </label>
          </div>

          <div>
            <label>
              <input
                type="radio"
                name="radioInput"
                value="optionA"
                checked={this.state.radioInput === "optionA"}
                onChange={this.handleChange}
              />
              Option A
            </label>
            <label>
              <input
                type="radio"
                name="radioInput"
                value="optionB"
                checked={this.state.radioInput === "optionB"}
                onChange={this.handleChange}
              />
              Option B
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
