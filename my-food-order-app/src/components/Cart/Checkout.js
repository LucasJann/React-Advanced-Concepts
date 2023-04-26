import React from "react";
import useInput from "../hooks/use-input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    input: enteredName,
    inputIsValid: nameIsValidated,
    inputHasError: thisNameHasError,
    inputChanged: nameChangeHandler,
    inputIsTouched: onNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    input: enteredStreet,
    inputIsValid: streetIsValidated,
    inputHasError: thisStreetHasError,
    inputChanged: streetChangeHandler,
    inputIsTouched: onStreetBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    inputName: enteredPostal,
    inputIsValid: postalIsValidated,
    inputHasError: thisPostalHasError,
    inputChanged: postalChangeHandler,
    inputIsTouched: onPostalBlurHandler,
  } = useInput((value) => value.trim().length === 5);

  const {
    inputName: enteredCity,
    inputIsValid: cityValidated,
    inputHasError: thisCityHasError,
    inputChanged: cityChangeHandler,
    inputIsTouched: onCityBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const nameControlClasses = `${classes.control} ${
    !thisNameHasError ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    !thisStreetHasError ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    !thisPostalHasError ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    !thisCityHasError ? "" : classes.invalid
  }`;

  let isValid =
    nameIsValidated && streetIsValidated && postalIsValidated && cityValidated;

  const onSubmitHandler = () => {
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={onNameBlurHandler}
          value={enteredName}
        />
        {thisNameHasError && (
          <p className={classes.error}>Please enter a valid name!</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={onStreetBlurHandler}
          value={enteredStreet}
        />
        {thisStreetHasError && (
          <p className={classes.error}>Please enter a valid street!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={onCityBlurHandler}
          value={enteredCity}
        />
        {thisCityHasError && (
          <p className={classes.error}>Please enter a valid city!</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalChangeHandler}
          onBlur={onPostalBlurHandler}
          value={enteredPostal}
        />
        {thisPostalHasError && (
          <p className={classes.error}>
            Please enter a valid postal code (5 characters long)!
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <div className={classes.actions}>
        <button disabled={!isValid}>Confirm</button>
      </div>
      </div>
    </form>
  );
};
export default Checkout;
