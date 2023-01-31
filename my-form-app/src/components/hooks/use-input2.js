import react, { useState } from "react";

const useInput = (valueIsValid) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  
  const valueIsValidated = valueIsValid(enteredValue);
  const hasError = !valueIsValidated && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputIsTouched = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    hasError,
    isTouched,
    enteredValue,
    valueIsValidated,
    reset,
    inputIsTouched,
    inputChangeHandler,
  };
};

export default useInput;
