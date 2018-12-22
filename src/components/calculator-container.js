import React, { Component } from "react";
import PropTypes from "prop-types";

class CalculatorContainer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  };

  state = {
    displayValue: "0"
  };

  render() {
    return (
      <React.Fragment>
        {this.props.render(this.state.displayValue)}
      </React.Fragment>
    );
  }
}

export default CalculatorContainer;
