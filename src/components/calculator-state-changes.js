import { getDisplayValue, calculateResult } from "../utils";

const handleInput = ({ state, inputValue }) => {
  if (!state.isLastActionEqual) {
    if (!/[÷|×|−|+]/g.test(state.displayValue)) {
      return {
        displayValue: getDisplayValue(state.displayValue, inputValue)
      };
    } else {
      return {
        displayValue: getDisplayValue("", inputValue),
        waitingForSecondValue: false
      };
    }
  } else {
    return {
      displayValue: getDisplayValue("", inputValue),
      isLastActionEqual: false
    };
  }
};

const handleOperator = ({ state, operator }) => {
  if (
    !state.waitingForSecondValue &&
    state.firstValue !== null &&
    state.operator !== null
  ) {
    return {
      waitingForSecondValue: true,
      displayValue: operator,
      firstValue: calculateResult(
        state.operator,
        state.firstValue,
        state.displayValue
      ),
      isLastActionEqual: false,
      operator
    };
  } else if (!state.waitingForSecondValue) {
    return {
      waitingForSecondValue: true,
      firstValue: state.displayValue,
      displayValue: operator,
      operator,
      isLastActionEqual: false
    };
  } else {
    return {
      displayValue: operator,
      operator,
      isLastActionEqual: false
    };
  }
};

const handleEqual = state => {
  if (
    !state.waitingForSecondValue &&
    state.firstValue !== null &&
    state.operator !== null
  ) {
    return {
      displayValue: calculateResult(
        state.operator,
        state.firstValue,
        state.displayValue
      ),
      firstValue: null,
      isLastActionEqual: true,
      operator: null
    };
  } else {
    if (state.waitingForSecondValue) {
      return {
        displayValue: state.firstValue,
        firstValue: null,
        isLastActionEqual: true,
        operator: null,
        waitingForSecondValue: false
      };
    } else {
      return {
        firstValue: state.displayValue,
        displayValue: state.displayValue,
        isLastActionEqual: true
      };
    }
  }
};

export const stateChangeHandlers = {
  input: handleInput,
  operator: handleOperator,
  equal: handleEqual
};
