import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/landing" className="logo">
      <span className="logo-first">Zaplanuj</span>
      <span className="logo-second"> Jedzonko</span>
    </Link>
  );
};
