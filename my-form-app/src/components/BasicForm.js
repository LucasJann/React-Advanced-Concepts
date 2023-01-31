import useInput from "../components/hooks/use-input2";

const BasicForm = (props) => {
  const {
    hasError: nameInputHasError,
    enteredValue: enteredName,
    valueIsValidated: isNameValid,
    inputChangeHandler: nameChangeInputHandler,
    inputIsTouched: inputBlurNameHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    hasError: lastNameInputHasError,
    enteredValue: enteredLastName,
    valueIsValidated: isLastNameValid,
    inputChangeHandler: lastNameChangeInputHandler,
    inputIsTouched: inputBlurLastNameHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    hasError: emailHasError,
    enteredValue: enteredEmail,
    valueIsValidated: isEmailValid,
    inputChangeHandler: emailChangeInputHandler,
    inputIsTouched: inputBlurEmailHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let isValid = false;

  if (isNameValid && isLastNameValid && isEmailValid) {
    isValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitado com sucesso! :D");
    console.log(
      `Your name is ${enteredLastName}, ${enteredName}. And i also checked here that your e-mail is ${enteredEmail}. is that correct?`
    );

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const styleNameDefinition = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const styleLastNameDefinition = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const styleEmailDefinition = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={styleNameDefinition}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeInputHandler}
            onBlur={inputBlurNameHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={styleLastNameDefinition}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeInputHandler}
            onBlur={inputBlurLastNameHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
        <div className={styleEmailDefinition}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeInputHandler}
            onBlur={inputBlurEmailHandler}
            value={enteredEmail}
          />
          {emailHasError && (
            <p className="error-text">Please put a valid email.</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
