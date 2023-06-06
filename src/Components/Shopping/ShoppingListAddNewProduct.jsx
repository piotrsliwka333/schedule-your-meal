import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const ShoppingListAddNewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    id: "",
    done: false,
  });
  const [newProductError, setNewProductError] = useState(false);

  let db = firebase.firestore();
  let user = firebase.auth().currentUser;
  const handleNewProductValidation = (e) => {
    const { value, name } = e.target;
    if (value.length <= 2 || value.length > 50) {
      setNewProduct((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
      setNewProductError(true);
    } else {
      setNewProduct((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
      setNewProductError(false);
    }
  };

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    if (newProduct.name.length <= 2) {
      setNewProductError(true);
    } else {
      db.collection("users")
        .doc(user.uid)
        .collection("products")
        .add(newProduct)
        .then((data) => {
          setNewProduct({ name: "", id: "", done: false });
        })
        .catch((e) => setNewProductError(true));
    }
  };

  return (
    <form
      onSubmit={(e) => handleAddNewProduct(e)}
      className="shopping-list-form"
    >
      <label className="shopping-list-form__label">Nowy Produkt</label>
      <input
        value={newProduct.name}
        onChange={(e) => handleNewProductValidation(e)}
        className={
          newProductError
            ? "shopping-list-form__input error"
            : "shopping-list-form__input"
        }
        type="text"
        name="name"
        placeholder="nowy produkt"
      />
      <button className="shopping-list-form-btn" type="submit">
        <i className="fas fa-plus-square" />
      </button>
      {newProductError && (
        <p className="error-message product-error">
          {newProduct.name.length <= 2
            ? "co najmniej 3 znaki"
            : "max. 50 znaków"}
        </p>
      )}
    </form>
  );
};
