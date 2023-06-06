import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const style = {
  backgroundImage: `url('/assets/images/image.png')`,
};

export const ApplicationTemplate = (props) => {
  const [logged, setLogged] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState("Imie");
  const [loggedOutError, setLoggedOutError] = useState(false);

  // hamburger logic
  const handleOpenMenu = (e) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  //logout logic
  const handleLogOut = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then((data) => setLoggedOutError(false))
      .catch((err) => setLoggedOutError(true));
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setLogged(true);
        setName(firebaseUser.email);
      } else {
        setLogged(false);
      }
    });
  }, []);

  return (
    <>
      <header className="app-header">
        <Logo />
        <div className="user-box">
          <div className="user-wrapper">
            {logged && (
              <button
                className="user-box__logout"
                onClick={(e) => handleLogOut(e)}
              >
                <i className="fas fa-power-off" />
              </button>
            )}
            <span className="user-box__name">{name}</span>
            <span className="user-box__icon">
              <i className="far fa-user-circle" />
            </span>
          </div>
          <button onClick={(e) => handleOpenMenu(e)} className="menu-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
      </header>
      <main className="app-main">
        <nav className={openMenu ? "side-navigation" : "side-navigation hide"}>
          <ul className="nav-list">
            <li className="nav-list__element">
              <NavLink exact to="/" className="nav-list__link">
                Pulpit
              </NavLink>
            </li>
            <li className="nav-list__element">
              <NavLink to="/recipes" className="nav-list__link">
                Przepisy
              </NavLink>
            </li>
            <li className="nav-list__element">
              <NavLink to="/schedule" className="nav-list__link">
                Plany
              </NavLink>
            </li>
            <li className="nav-list__element">
              <NavLink to="/shopping" className="nav-list__link">
                Zakupy
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="main-content" style={style}>
          {props.children}
        </div>
      </main>
    </>
  );
};
