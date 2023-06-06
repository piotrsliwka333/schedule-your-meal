import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { LoginForm } from "../../Components/Login/LoginForm";
import { RegisterForm } from "../../Components/Login/RegisterForm";

export const Login = () => {
  const db = firebase.firestore();
  const [registerOrLogin, setRegisterOrLogin] = useState(true);
  const [googleSignInError, setGoogleSignInError] = useState(false);

  const signInWithGoogle = (e) => {
    e.preventDefault();
    let base_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(base_provider)
      .then((cred) => db.collection("users").doc(cred.user.uid))
      .catch((err) => {
        setGoogleSignInError(true);
      });
  };

  const handleChangeOnLoginOrRegister = (e) => {
    e.preventDefault();
    setRegisterOrLogin(!registerOrLogin);
  };
  //by click in sign in with google we can login or register so we don't have create another file for it

  return (
    <section className="login">
      <h1 className="login__greeting">Witaj,</h1>
      <p className="login__text">
        {registerOrLogin ? "Podaj email i hasło" : "Podaj email i hasło"}
        <br /> {registerOrLogin ? "żeby się zalogować" : "żeby założyć konto"}
      </p>
      {registerOrLogin ? <LoginForm /> : <RegisterForm />}
      <button
        onClick={(e) => handleChangeOnLoginOrRegister(e)}
        className="switch-button home-button"
      >
        {registerOrLogin ? "zarejestruj się" : "zaloguj się"}
      </button>
      <div className="google-btn" onClick={(e) => signInWithGoogle(e)}>
        <div className="google-icon-wrapper">
          <img
            alt="google sign-in icon"
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
    </section>
  );
};
