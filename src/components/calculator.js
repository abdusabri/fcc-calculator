import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CalcButton from "./calc-button";
import "./calculator.css";

const buttons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
const mathOpButtons = ["÷", "×", "−", "+"];
const buttonColors = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};

const Calculator = () => {
  return (
    <Card style={{ width: 453 }}>
      <CardHeader
        style={{ padding: 0, width: "100%" }}
        subheader={
          <div className="header-row">
            <input type="text" disabled defaultValue="0" className="textarea" />
            <CalcButton buttonText="AC" buttonColor={buttonColors.SECONDARY} />
          </div>
        }
      />

      {/* <Divider /> */}
      <CardContent style={{ padding: 0, display: "flex" }}>
        <div className="calc-buttons-area">
          {buttons.map(button => (
            <CalcButton
              buttonText={button}
              buttonColor={buttonColors.DEFAULT}
            />
          ))}
        </div>
        <div className="calc-buttons-area">
          {mathOpButtons.map(button => (
            <CalcButton
              buttonText={button}
              buttonColor={buttonColors.PRIMARY}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;
