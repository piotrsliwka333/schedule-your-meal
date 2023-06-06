import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Desktop } from "./pages/Desktop/Desktop";
import { Schedule } from "./pages/Schedule/Schedule";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Shopping } from "./pages/Shopping/Shopping";
import { ApplicationTemplate } from "./Templates/ApplicationTemplate";
import { Recipes } from "./pages/Recipes/Recipes";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { Loading } from "./Components/Shared/Loading/Loading";

export const App = () => {
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      setLogged(true);
    } else {
      setLogged(false);
    }
    setIsLoading(false);
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/landing" component={Home} />
        <Route
          exact
          path={["/login", "/", "/recipes", "/schedule", "/shopping"]}
        >
          <ApplicationTemplate>
            <Route
              exact
              path={"/login"}
              render={() =>
                isLoading ? (
                  <Loading />
                ) : logged ? (
                  <Redirect to="/" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              exact
              path={"/"}
              render={() =>
                isLoading ? (
                  <Loading />
                ) : logged ? (
                  <Desktop />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path={"/recipes"}
              render={() =>
                isLoading ? (
                  <Loading />
                ) : logged ? (
                  <Recipes />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path={"/schedule"}
              render={() =>
                isLoading ? (
                  <Loading />
                ) : logged ? (
                  <Schedule />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path={"/shopping"}
              render={() =>
                isLoading ? (
                  <Loading />
                ) : logged ? (
                  <Shopping />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </ApplicationTemplate>
        </Route>

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
