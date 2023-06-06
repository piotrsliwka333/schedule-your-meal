import React, { useState } from "react";
import { ShoppingNavigation } from "../../Components/Shopping/ShoppingNavigation";
import { ShoppingNavigationToggle } from "../../Components/Shopping/ShoppingNavigationToggle";
import { ShoppingList } from "../../Components/Shopping/ShoppingList";

export const Shopping = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleChangeDisplayOfNavigation = (e) => {
    e.preventDefault();
    setShowNavigation(!showNavigation);
  };

  return (
    <section className="shopping">
      <ShoppingNavigationToggle
        showOrHideNav={handleChangeDisplayOfNavigation}
      />
      <ShoppingNavigation showOrHide={showNavigation} />
      <ShoppingList />
    </section>
  );
};
