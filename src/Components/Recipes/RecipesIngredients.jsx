import React from "react";
import { RecipesElements } from "./RecipesElements";
import { RecipesElement } from "./RecipesElement";
import { Col } from "react-bootstrap";

export const RecipesIngredients = (props) => {
  const {
    saveEditedElement,
    deleteElement,
    addNewIngredient,
    newRecipe,
    ingredientValidation,
    newIngredientValue,
    newIngredientError,
  } = props;

  const handleCheckIngredientValidation = (e) => {
    if (typeof ingredientValidation === "function") {
      ingredientValidation(e);
    }
  };

  const handleCheckAddIngredient = (
    e,
    newIngredientValue,
    newRecipesIngredients
  ) => {
    if (typeof addNewIngredient === "function") {
      addNewIngredient(e, newIngredientValue, newRecipesIngredients);
    }
  };

  return (
    <Col className="recipes__ingredients col-12 col-md-6 col-xl-6">
      <h2 className="recipes__ingredients__title">Składniki</h2>
      <form
        onSubmit={(e) =>
          handleCheckAddIngredient(e, newIngredientValue, newRecipe.ingredients)
        }
        className="ingredients-form"
      >
        <div className="ingredients-form-wrapper">
          <input
            onChange={(e) => handleCheckIngredientValidation(e)}
            value={newIngredientValue}
            placeholder="podaj nazwę składnika"
            className={
              newIngredientError
                ? "ingredients-form__input error"
                : "ingredients-form__input"
            }
          />
          <button type="submit" className="ingredients-form__button">
            <i className="fas fa-plus-square" />
          </button>
          {newIngredientError && (
            <p className="error-message">
              {newIngredientValue.length > 150
                ? "max 150 znaków"
                : "pole nie może być puste"}
            </p>
          )}
        </div>
      </form>
      <RecipesElements>
        {newRecipe.ingredients.map((element) => {
          return (
            <RecipesElement
              saveEditedElement={saveEditedElement}
              arrayToEdit={"ingredients"}
              array={newRecipe.ingredients}
              elementToEditOrDelete={element.id}
              deleteElement={deleteElement}
              text={element.name}
              key={element.id}
            />
          );
        })}
      </RecipesElements>
    </Col>
  );
};
