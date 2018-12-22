import React, { Component } from "react";
import "./app.css";
import Calculator from "./components/calculator";
import CalculatorContainer from "./components/calculator-container";

class App extends Component {
  render() {
    return (
      <div className="app">
        <CalculatorContainer
          render={(displayValue, onCalcButtonClick) => (
            <Calculator
              displayValue={displayValue}
              onCalcButtonClick={onCalcButtonClick}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
