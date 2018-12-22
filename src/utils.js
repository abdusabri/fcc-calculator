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
      } else {
        return currentValue + inputValue;
      }
    } else {
      return currentValue + inputValue;
    }
  }
};
