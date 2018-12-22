import React, { Component } from "react";
import PropTypes from "prop-types";
import { ACTION_INPUT, ACTION_CLEAR } from "./button-const-actions";
import { getDisplayValue } from "../utils";

const initialState = {
  displayValue: "0"
};

class CalculatorContainer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = { ...initialState };

  handleButtonAction = ({ action, payload }) => {
    switch (action) {
      case ACTION_INPUT:
        this.setState({
          displayValue: getDisplayValue(this.state.displayValue, payload)
        });
        break;
      case ACTION_CLEAR:
        this.setState({ ...initialState });
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
