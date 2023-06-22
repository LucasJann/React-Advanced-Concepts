import React, { useRef, useState, useEffect } from "react";

import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Auth = () => {
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const [isBlockActive, setIsBlockActive] = useState(true);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const isActive = isValidEmail && isValidPassword ? true : false;

  useEffect(() => {
    isActive ? setIsBlockActive(false) : setIsBlockActive(true);
  }, [isActive]);

  const onEmailChangeHandler = () => {
    email.current.value !== "" ? setIsValidEmail(true) : setIsValidEmail(false);
  };

  const onPasswordChangeHandler = () => {
    password.current.value !== ""
      ? setIsValidPassword(true)
      : setIsValidPassword(false);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  const buttonStyle = isBlockActive ? classes.invalid : classes.valid;

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={email}
              onChange={onEmailChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={password}
              onChange={onPasswordChangeHandler}
            />
          </div>
          <button disabled={isBlockActive} className={buttonStyle}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
