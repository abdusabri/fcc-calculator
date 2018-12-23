import { Calculator } from "simplecalculatorjs";

export const getDisplayValue = (currentValue, inputValue) => {
  if (currentValue.length === 18) return currentValue; // Max digits

  if (currentValue === "0") {
    if (inputValue === ".") {
      return currentValue + inputValue;
    } else {
      return inputValue;
    }
  } else {
    if (inputValue === ".") {
      if (~currentValue.indexOf(inputValue)) {
        return currentValue;
      } else if (currentValue === "") {
        return "0" + inputValue;
      } else {
        return currentValue + inputValue;
      }
    } else {
      return currentValue + inputValue;
    }
  }
};

export const calculateResult = (operator, firstValue, secondValue) => {
  const calc = new Calculator(firstValue, secondValue);
  switch (operator) {
    case "+":
      return adjustValueToMaxDisplayLength(calc.add());
    case "−":
      return adjustValueToMaxDisplayLength(calc.minus());
    case "×":
      return adjustValueToMaxDisplayLength(calc.mul());
    case "÷":
      return adjustValueToMaxDisplayLength(calc.divide());
    default:
      return "0";
  }
};

const adjustValueToMaxDisplayLength = value => {
  return value.toString().slice(0, 18);
};
