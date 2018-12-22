import React, { Component } from "react";
import PropTypes from "prop-types";
import { ACTION_INPUT } from "./button-const-actions";
import { getDisplayValue } from "../utils";

class CalculatorContainer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = {
    displayValue: "0"
  };

  handleButtonAction = ({ action, payload }) => {
    switch (action) {
      case ACTION_INPUT:
        this.setState({
          displayValue: getDisplayValue(this.state.displayValue, payload)
        });
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
