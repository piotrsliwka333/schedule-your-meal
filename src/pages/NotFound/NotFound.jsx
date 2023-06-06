import React from "react";
import { HomeTemplate } from "../../Templates/HomeTemplates";

export const NotFound = () => {
  return (
    <HomeTemplate>
      <div className="not-found">
        <h1 className="not-found__title">Strona nie znaleziona</h1>
      </div>
    </HomeTemplate>
  );
};
