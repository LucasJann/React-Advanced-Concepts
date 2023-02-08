import { useEffect, useReducer, useState } from "react";

const initialState = {
  word: '',
  isTouched: false,
};

const inputReducerHandler = (state, action) => {
  if (action.type === "INPUT") {
    return { word: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { word: state.word, isTouched: action.isTouched };
  }
};

const useInput = (validateInput) => {
  const [initState, dispatch] = useReducer(inputReducerHandler, initialState);
  const [hasError, setHasError] = useState(false);

  const isValid = validateInput(initState.word);
  console.log(initState.word)

  const inputChanged = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputIsTouched = () => {
    dispatch({ type: "BLUR", isTouched: true });
  };

  useEffect(() => {
    if (initState.isTouched && !isValid) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [initState.word, initState.isTouched]);

  return {
    inputChanged,
    inputIsTouched,
    input: initState.word,
    inputIsValid: isValid,
    inputHasError: hasError,
  };
};

export default useInput;
