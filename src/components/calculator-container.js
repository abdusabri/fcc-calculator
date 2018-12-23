import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ACTION_INPUT,
  ACTION_CLEAR,
  ACTION_OPERATOR,
  ACTION_EQUAL
} from "./button-const-actions";
import { getDisplayValue, calculateResult } from "../utils";

const initialState = {
  displayValue: "0",
  firstValue: "0",
  waitingForSecondValue: false,
  operator: null,
  isLastActionEqual: false
};

class CalculatorContainer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = { ...initialState };

  handleButtonAction = ({ action, payload }) => {
    switch (action) {
      case ACTION_INPUT:
        this.handleActionInput(payload);
        break;
      case ACTION_CLEAR:
        this.setState({ ...initialState });
        break;
      case ACTION_OPERATOR:
        this.handleActionOperator(payload);
        break;
      case ACTION_EQUAL:
        this.handleActionEqual();
        break;
      default:
        break;
    }
  };

  handleActionInput = inputValue => {
    if (!this.state.isLastActionEqual) {
      if (!/[÷|×|−|+]/g.test(this.state.displayValue)) {
        this.setState({
          displayValue: getDisplayValue(this.state.displayValue, inputValue)
        });
      } else {
        this.setState({
          displayValue: getDisplayValue("", inputValue),
          waitingForSecondValue: false
        });
      }
    } else {
      this.setState({
        displayValue: getDisplayValue("", inputValue),
        isLastActionEqual: false
      });
    }
  };

  handleActionOperator = operator => {
    if (!this.state.waitingForSecondValue) {
      this.setState({
        waitingForSecondValue: true,
        firstValue: this.state.displayValue,
        displayValue: operator,
        operator
      });
    } else {
      this.setState({ displayValue: operator, operator });
    }
  };

  handleActionEqual = () => {
    if (!this.state.waitingForSecondValue && this.state.firstValue === "0") {
      this.setState({
        firstValue: this.state.displayValue,
        displayValue: this.state.displayValue,
        isLastActionEqual: true
      });
    } else {
      this.setState({
        displayValue: calculateResult(
          this.state.operator,
          this.state.firstValue,
          this.state.displayValue
        ),
        firstValue: "0",
        isLastActionEqual: true,
        operator: null
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.render(this.state.displayValue, this.handleButtonAction)}
      </React.Fragment>
    );
  }
}

export default CalculatorContainer;
