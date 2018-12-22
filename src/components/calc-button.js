import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./calc-button.css";
import { createButtonAction } from "./button-const-actions";

const CalcButton = ({
  buttonText,
  buttonColor,
  buttonId,
  onCalcButtonClick,
  buttonAction
}) => {
  const handleButtonClick = () => {
    onCalcButtonClick(createButtonAction(buttonAction, buttonText));
  };

  return (
    <div className="calc-button">
      <Button
        variant="contained"
        style={{ height: "100%", fontSize: "1.5rem" }}
        size="large"
        color={buttonColor}
        id={buttonId}
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

CalcButton.prototypes = {
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  onCalcButtonClick: PropTypes.func.isRequired,
  buttonAction: PropTypes.string.isRequired
};

export default CalcButton;
