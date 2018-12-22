import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CalcButton from "./calc-button";
import "./calculator.css";
import {
  BUTTON_COLORS,
  clearButton,
  calcButtons,
  mathOpButtons
} from "./button-const-actions";

const Calculator = () => {
  return (
    <Card style={{ width: 453 }}>
      <CardHeader
        style={{ padding: 0, width: "100%" }}
        subheader={
          <div className="header-row">
            <input type="text" disabled defaultValue="0" className="textarea" />
            <CalcButton
              buttonText={clearButton.buttonText}
              buttonColor={BUTTON_COLORS.SECONDARY}
              buttonId={clearButton.buttonId}
              key={clearButton.buttonId}
            />
          </div>
        }
      />
      <CardContent style={{ padding: 0, display: "flex" }}>
        <div className="calc-buttons-area">
          {calcButtons.map(button => (
            <CalcButton
              buttonText={button.buttonText}
              buttonColor={BUTTON_COLORS.DEFAULT}
              buttonId={button.buttonId}
              key={button.buttonId}
            />
          ))}
        </div>
        <div className="calc-buttons-area">
          {mathOpButtons.map(button => (
            <CalcButton
              buttonText={button.buttonText}
              buttonColor={BUTTON_COLORS.PRIMARY}
              buttonId={button.buttonId}
              key={button.buttonId}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;
