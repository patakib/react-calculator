import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      currentNum: '',
      operators: ["+","-","/","*"],
      result: ''
    };
    this.newDigit = this.newDigit.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
    this.handleDecimal = this.handleDecimal.bind(this)
    this.evaluate = this.evaluate.bind(this)
  }
  newDigit = (event) => {
    if (this.state.currentNum.slice(0,1)!=="0" || this.state.currentNum.slice(1,2)===".") {
      this.setState({
        input: this.state.input+event.target.value
      });
      if (this.state.currentNum==='') {
        this.setState({
          currentNum: event.target.value
        });
      }
      else {
        this.setState({
          currentNum: this.state.currentNum+event.target.value
        });
      }
    }
  };
  clearInput = () => {
    this.setState({
      input: '',
      currentNum: '',
      result: ''
    });
  };
  handleOperator = (event) => {
    if (!this.state.operators.includes(this.state.input.slice(-1))) {
      this.setState({
        input: this.state.input+event.target.value,
        currentNum: ''
      });
    } else {
      this.setState({
        input: this.state.input
      });
    }
  }
  handleMinus = (event) => {
    if (this.state.operators.includes(this.state.input.slice(-2,-1)) && this.state.operators.includes(this.state.input.slice(-1))) {
    } else {
      this.setState({
        input: this.state.input+event.target.value,
      });
      if (this.state.operators.includes(this.state.input.slice(-1)) && event.target.value==="-") {
        this.setState({
          currentNum: event.target.value
        });
      }
    }
  }
  handleDecimal = (event) => {
    if (this.state.currentNum.length>0 && !this.state.currentNum.includes(".")) {
      this.setState({
        input: this.state.input+event.target.value,
        currentNum: this.state.currentNum+event.target.value
      });
    }
  }
  evaluate = (event) => {
    this.setState({
      result: eval(this.state.input)
    });
  }
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <div class="container">
          <div id="display">{this.state.input}</div>
          <div id="result">{this.state.result}</div>
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
          <button id="equals" value="=" onClick={this.evaluate}>=</button>
          <button id="add" value="+" onClick={this.handleOperator}>+</button>
          <button id="subtract" value="-" onClick={this.handleMinus}>-</button>
          <button id="multiply" value="*" onClick={this.handleOperator}>*</button>
          <button id="divide" value="/" onClick={this.handleOperator}>/</button>
          <button id="decimal" value="." onClick={this.handleDecimal}>.</button>
        </div>
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
