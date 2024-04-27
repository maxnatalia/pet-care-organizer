import { useState, ChangeEvent } from "react";
import { ValidationFunction } from "../../../types/types";

type UseFieldProps = {
  validateValue?: ValidationFunction;
  initialValue?: string;
};

const useField = ({ validateValue, initialValue = "" }: UseFieldProps = {}) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue ? validateValue(enteredValue) : true;
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    setIsTouched,
    setEnteredValue,
  };
};
export default useField;
