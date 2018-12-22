import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ACTION_INPUT,
  ACTION_CLEAR,
  ACTION_OPERATOR
} from "./button-const-actions";
import { getDisplayValue } from "../utils";

const initialState = {
  displayValue: "0",
  firstValue: null,
  waitingForSecondValue: false,
  operator: null
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
      default:
        break;
    }
  };

  handleActionInput = inputValue => {
    this.setState({
      displayValue: getDisplayValue(this.state.displayValue, inputValue)
    });
  };

  handleActionOperator = operator => {
    if (!this.state.waitingForSecondValue) {
      this.setState({
        waitingForSecondValue: true,
        firstValue: this.state.displayValue,
        displayValue: operator
      });
    } else {
      this.setState({ displayValue: operator });
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
