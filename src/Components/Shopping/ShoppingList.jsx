import React from "react";
import { ShoppingListAddNewProduct } from "./ShoppingListAddNewProduct";
import { ShoppingListElements } from "./ShoppingListElements";

export const ShoppingList = () => {
  return (
    <div className="shopping-list">
      <ShoppingListAddNewProduct />
      <ShoppingListElements />
    </div>
  );
};
