import React, { useReducer } from "react";

const useInput = (valueIsValid) => {
  const initialInputState = {
    value: "",
    isTouched: false,
  };

  const inputReducerHandler = (state, action) => {
    if (action.type === "INPUT") {
      return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
      return { isTouched: true, value: state.value};
    }
    if (action.type === "RESET") {
      return { isTouched: false, value: ''};
    }
  };

  const [initState, dispatch] = useReducer(
    inputReducerHandler,
    initialInputState
  );

  const valueIsValidated = valueIsValid(initState.value);
  const hasError = !valueIsValidated && initState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputIsTouched = () => {
    dispatch({ type: "BLUR"});
  };

  const reset = () => {
    dispatch({ type: "RESET"});
  };

  return {
    value: initState.value,
    isTouched: initState.isTouched,
    hasError,
    reset,
    inputIsTouched,
    inputChangeHandler,
  };
};

export default useInput;
