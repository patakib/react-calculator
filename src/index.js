import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      displayed: ''
    }
    this.newDigit = this.newDigit.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }
  newDigit = (event) => {
    this.setState({
      input: this.state.input+event.target.value
    });
  };
  clearInput = () => {
    this.setState({
      input: ''
    });
  };
  handleOperator = (event) => {
    
    this.setState({
      input: this.state.input+event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <div id="display">{this.state.input}</div>
        <button id="one" value="1" onClick={this.newDigit}>1</button>
        <button id="two" value="2" onClick={this.newDigit}>2</button>
        <button id="three" value="3" onClick={this.newDigit}>3</button>
        <button id="four" value="4" onClick={this.newDigit}>4</button>
        <button id="five" value="5" onClick={this.newDigit}>5</button>
        <button id="six" value="6" onClick={this.newDigit}>6</button>
        <button id="seven" value="7" onClick={this.newDigit}>7</button>
        <button id="eight" value="8" onClick={this.newDigit}>8</button>
        <button id="nine" value="9" onClick={this.newDigit}>9</button>
        <button id="zero" value="0" onClick={this.newDigit}>0</button>
        <button id="clear" value="AC" onClick={this.clearInput}>AC</button>
        <button id="equals" value="=">=</button>
        <button id="add" value="+">+</button>
        <button id="subtract" value="-">-</button>
        <button id="multiply" value="*">*</button>
        <button id="divide" value="/">/</button>
        <button id="decimal" value=".">.</button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
