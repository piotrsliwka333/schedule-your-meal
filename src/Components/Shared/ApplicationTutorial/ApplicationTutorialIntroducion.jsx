import React from "react";
import { Logo } from "../../../Templates/Logo";

export const ApplicationTutorialIntroduction = (props) => {
  const { nextPage } = props;

  const checkNextPage = (e) => {
    if (typeof nextPage === "function") {
      nextPage(e);
    }
  };

  return (
    <div className="tutorial-introduction">
      <h1 className="tutorial-introduction__title">Witaj w tutorialu</h1>
      <Logo />
      <p className="tutorial-introduction__text">
        Dowiesz się w nim jak wykorzystać w pełni aplikację zaplanujjedzonko tak
        żeby żadna nie umkneła twojej uwadze :)
      </p>
      <button
        onClick={(e) => checkNextPage(e)}
        className="home-button tutorial-introduction-btn"
      >
        Zaczynajmy
      </button>
    </div>
  );
};
