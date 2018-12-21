import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./calc-button.css";

const CalcButton = ({ buttonText, buttonColor }) => {
  return (
    <div className="calc-button">
      <Button
        variant="contained"
        style={{ height: "100%", fontSize: "1.5rem" }}
        onClick={() => {}}
        size="large"
        color={buttonColor}
      >
        {buttonText}
      </Button>
    </div>
  );
};

CalcButton.prototypes = {
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired
};

export default CalcButton;
