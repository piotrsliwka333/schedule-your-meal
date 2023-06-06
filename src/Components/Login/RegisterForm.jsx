import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const RegisterForm = () => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  //Errors
  const [emailError, setEmailError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordRepeatError, setPasswordRepeatError] = useState(false);

  const registerNewAccountWithMailAndPassword = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (password.length < 6) {
      setPasswordError(true);
    }
    if (passwordRepeat.length < 6 || password !== passwordRepeat) {
      setPasswordRepeatError(true);
    }
    if (!registerError && !passwordError && !emailError) {
      auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        return db.collection("users").doc(cred.user.uid).set({
          bio: email,
        });
      });
    }
  };

  // function which check validate of email
  function validateEmail(email) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  const handleEmailValidation = (e) => {
    const { value } = e.target;
    if (!validateEmail(value)) {
      setEmailError(true);
      setEmail(value);
    } else {
      setEmailError(false);
      setEmail(value);
    }
  };

  const handlePasswordValidation = (e) => {
    const { value } = e.target;
    if (value.length < 6) {
      setPasswordError(true);
      setPassword(value);
    } else {
      setPasswordError(false);
      setPassword(value);
    }
  };

  const handlePasswordRepeatValidation = (e) => {
    const { value } = e.target;
    if (value.length < 6 || value !== password) {
      setPasswordRepeatError(true);
      setPasswordRepeat(value);
    } else {
      setPasswordRepeatError(false);
      setPasswordRepeat(value);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => registerNewAccountWithMailAndPassword(e)}
        className="login-form register-form"
      >
        <label htmlFor="email-register" className="login-form__label">
          Login
        </label>
        <input
          id="email-register"
          type="email"
          className={
            registerError ? "login-form__input error" : "login-form__input"
          }
          value={email}
          placeholder="Podaj swój email"
          onChange={(e) => handleEmailValidation(e)}
        />
        <label htmlFor="password-register" className="login-form__label">
          Hasło
        </label>
        <input
          id="password-register"
          type="password"
          className={
            registerError ? "login-form__input error" : "login-form__input"
          }
          value={password}
          placeholder="Podaj swoje hasło"
          onChange={(e) => handlePasswordValidation(e)}
        />
        <label htmlFor="password-register-repeat" className="login-form__label">
          Powtórz hasło
        </label>
        <input
          id="password-register-repeat"
          type="password"
          className={
            registerError ? "login-form__input error" : "login-form__input"
          }
          value={passwordRepeat}
          placeholder="Podaj swoje hasło"
          onChange={(e) => handlePasswordRepeatValidation(e)}
        />
        {emailError && (
          <p className="error-message email-error">
            podaj poprawny adres email
          </p>
        )}
        {passwordError && (
          <p className="error-message password-error">
            hasło musi mieć co najmniej 6 znaków
          </p>
        )}
        {passwordRepeatError && (
          <p className="error-message repeat-password-error">
            {passwordRepeat.length < 6
              ? "hasło musi mieć co najmniej 6 znaków"
              : "hasła muszą być takie same"}
          </p>
        )}
        {registerError && (
          <p className="error-message register-error">
            Niepoprawny login lub hasło
          </p>
        )}
        <button type="submit" className="login-form__button">
          Zarejestruj się
        </button>
      </form>
    </>
  );
};
