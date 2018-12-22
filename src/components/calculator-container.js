import React, { Component } from "react";

class CalculatorContainer extends Component {
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
