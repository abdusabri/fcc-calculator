import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ACTION_INPUT,
  ACTION_CLEAR,
  ACTION_OPERATOR,
  ACTION_EQUAL,
  createActionFromKeydown
} from "./button-const-actions";
import { stateChangeHandlers } from "./calculator-state-changes";

const initialState = {
  displayValue: "0",
  firstValue: null,
  waitingForSecondValue: false,
  operator: null,
  isLastActionEqual: false
};

class CalculatorContainer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = { ...initialState };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  handleKeyDown = event => {
    const action = createActionFromKeydown(event.key);
    if (action) {
      this.handleButtonAction(action);
    }
  };

  handleButtonAction = ({ action, payload }) => {
    switch (action) {
      case ACTION_INPUT:
        this.setState(
          stateChangeHandlers.input({ state: this.state, inputValue: payload })
        );
        break;
      case ACTION_CLEAR:
        this.setState({ ...initialState });
        break;
      case ACTION_OPERATOR:
        this.setState(
          stateChangeHandlers.operator({ state: this.state, operator: payload })
        );
        break;
      case ACTION_EQUAL:
        this.setState(stateChangeHandlers.equal);
        break;
      default:
        break;
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
