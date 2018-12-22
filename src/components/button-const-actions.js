export const BUTTON_COLORS = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};

export const clearButton = {
  buttonId: "clear",
  buttonText: "AC"
};

export const mathOpButtons = [
  { buttonId: "divide", buttonText: "÷" },
  { buttonId: "multiply", buttonText: "×" },
  { buttonId: "subtract", buttonText: "−" },
  { buttonId: "add", buttonText: "+" }
];

export const ACTION_INPUT = "ACTION_INPUT";

export const calcButtons = [
  { buttonId: "seven", buttonText: "7", buttonAction: ACTION_INPUT },
  { buttonId: "eight", buttonText: "8", buttonAction: ACTION_INPUT },
  { buttonId: "nine", buttonText: "9", buttonAction: ACTION_INPUT },
  { buttonId: "four", buttonText: "4", buttonAction: ACTION_INPUT },
  { buttonId: "five", buttonText: "5", buttonAction: ACTION_INPUT },
  { buttonId: "six", buttonText: "6", buttonAction: ACTION_INPUT },
  { buttonId: "one", buttonText: "1", buttonAction: ACTION_INPUT },
  { buttonId: "two", buttonText: "2", buttonAction: ACTION_INPUT },
  { buttonId: "three", buttonText: "3", buttonAction: ACTION_INPUT },
  { buttonId: "decimal", buttonText: ".", buttonAction: ACTION_INPUT },
  { buttonId: "zero", buttonText: "0", buttonAction: ACTION_INPUT },
  { buttonId: "equals", buttonText: "=" }
];

export const createButtonAction = (action, payload) => ({
  action,
  payload
});
