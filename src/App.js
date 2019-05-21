import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextBox } from "./TextBox";
import { Button } from "./Button";
import Checkbox from "./Checkbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: "Number",
      placeholderResult: "Result",
      textBoxNumbersClassName: "input-box",
      textBoxResultClassName: "result-box",
      aDisabled: false,
      bDisabled: false,
      cDisabled: false,
      aValue: "",
      bValue: "",
      cValue: "",
      resultValue: "",
      pattern: /^(-?\d*\.?\d*)$/,
      calcButtonWrapper: "calculation-buttons",
      resultWrapper: "clear-button"
    };
    this.handleUserInputA = this.handleUserInputA.bind(this);
    this.handleUserInputB = this.handleUserInputB.bind(this);
    this.handleUserInputC = this.handleUserInputC.bind(this);

    this.calculate = this.calculate.bind(this);
    this.isInputMatchesPattern = this.isInputMatchesPattern.bind(this);
  }

  isInputMatchesPattern(newValue) {
    if (newValue.match(this.state.pattern)) {
      return true;
    } else return false;
  }

  handleUserInputA(newValue) {
    if (this.isInputMatchesPattern(newValue)) {
      this.setState({
        aValue: newValue
      });
    }
  }
  handleUserInputB(newValue) {
    if (this.isInputMatchesPattern(newValue)) {
      this.setState({
        bValue: newValue
      });
    }
  }
  handleUserInputC(newValue) {
    if (this.isInputMatchesPattern(newValue)) {
      this.setState({
        cValue: newValue
      });
    }
  }

  clearFields() {
    this.setState({
      aValue: "",
      bValue: "",
      cValue: "",
      resultValue: ""
    });
  }

  render() {
    let calcButtons = this.props.calcButtons.map((item, index) => {
      return (
        <Button
          value={item.value}
          operation={item.operation}
          onClick={this.calculate.bind(this)}
          key={index}
        />
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome React Calculator</h2>
        </div>
        <div id="calculator">
          <div className="inner">
            <h1>Calculator</h1>
            <div>
              <TextBox
                textBoxClassName={this.state.textBoxNumbersClassName}
                placeholderText={this.state.placeholderText}
                value={this.state.aValue}
                disabled={this.state.aDisabled}
                onChangeUserInput={this.handleUserInputA}
              />
              <Checkbox 
                
              />

              <TextBox
                textBoxClassName={this.state.textBoxNumbersClassName}
                placeholderText={this.state.placeholderText}
                disabled={this.state.bDisabled}
                value={this.state.bValue}
                onChangeUserInput={this.handleUserInputB}
              />
              <Checkbox

              />

              <TextBox
                textBoxClassName={this.state.textBoxNumbersClassName}
                placeholderText={this.state.placeholderText}
                disabled={this.state.cDisabled}
                value={this.state.cValue}
                onChangeUserInput={this.handleUserInputC}
              />
              <Checkbox

              />
            </div>
            <div className={this.state.calcButtonWrapper}>{calcButtons}</div>
            <div className={this.state.resultWrapper}>
              <TextBox
                textBoxClassName={this.state.textBoxResultClassName}
                placeholderText={this.state.placeholderResult}
                disabled="disabled"
                value={this.state.resultValue}
              />
              <Button
                value="Clear"
                operation="clear"
                onClick={this.clearFields.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
