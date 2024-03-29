import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { RecipesDescription } from "../../Components//Recipes/RecipesDescription";
import { RecipesInstructions } from "../../Components//Recipes/RecipesInstructions";
import { RecipesIngredients } from "../../Components//Recipes/RecipesIngredients";
import { RecipesList } from "../../Components//Recipes/RecipesList";

export const Recipes = () => {
  const [recipesList, setRecipesList] = useState(true);
  const [newRecipe, setNewRecipe] = useState({
    id: "",
    title: "",
    description: "",
    instructions: [],
    ingredients: [],
  });
  // Errors state
  const [newRecipeTitleError, setNewRecipeTitleError] = useState(false);
  const [newRecipeDescriptionError, setNewRecipeDescriptionError] =
    useState(false);
  const [newRecipeInstructionError, setNewRecipeInstructionError] =
    useState(false);
  const [newRecipeIngredientError, setNewRecipeIngredientError] =
    useState(false);
  const [editRecipeError, setEditRecipesError] = useState(false);
  // Instructions state
  const [newRecipeInstruction, setNewRecipeInstruction] = useState("");
  const [newRecipeIngredient, setNewRecipeIngredient] = useState("");
  // here we will change if in recipe description will change name from new recipe on edit recipe
  const [newOrEdit, setNewOrEdit] = useState("new");
  const [edited, setEdited] = useState(true);
  let db = firebase.firestore();
  let user = firebase.auth().currentUser;

  const handleAddNewRecipe = (
    e,
    newRecipeTitle,
    newRecipeDescription,
    newRecipeInstructions,
    newRecipeIngredients
  ) => {
    e.preventDefault();
    if (newRecipeTitle.length <= 0 || newRecipeTitle.length > 50) {
      setNewRecipeTitleError(true);
    }
    if (newRecipeDescription.length <= 0 || newRecipeDescription.length > 150) {
      setNewRecipeDescriptionError(true);
    }
    if (newRecipeInstructions.length === 0) {
      setNewRecipeInstructionError(true);
    }
    if (newRecipeIngredients.length === 0) {
      setNewRecipeIngredientError(true);
    } else if (
      newRecipeIngredients.length > 0 &&
      newRecipeInstructions.length > 0 &&
      newRecipeDescription.length > 0 &&
      newRecipeDescription.length <= 150 &&
      newRecipeTitle.length > 0 &&
      newRecipeTitle.length <= 50
    ) {
      setNewRecipeTitleError(false);
      setNewRecipeDescriptionError(false);
      setRecipesList(true);
      db.collection("users")
        .doc(user.uid)
        .collection("recipes")
        .add(newRecipe)
        .then((data) => {
          setNewRecipe({
            id: "",
            title: "",
            description: "",
            instructions: [],
            ingredients: [],
          });
        });
    }
  };

  // validation for recipeTitle

  const handleRecipeTittleValidation = (e) => {
    const { value, name } = e.target;
    if (value.length === 0 || value.length > 50) {
      setNewRecipeTitleError(true);
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    } else {
      setNewRecipeTitleError(false);
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  //validation for recipeDescription
  const handleRecipeDescriptionValidation = (e) => {
    const { value, name } = e.target;
    if (value.length === 0 || value.length > 150) {
      setNewRecipeDescriptionError(true);
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    } else {
      setNewRecipeDescriptionError(false);
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  //validation for newInstruction on Input
  const handleNewInstructionValidation = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length === 0 || value.length > 150) {
      setNewRecipeInstruction(value);
      setNewRecipeInstructionError(true);
    } else {
      setNewRecipeInstruction(value);
      setNewRecipeInstructionError(false);
    }
  };

  //validation of adding newInstruction
  const handleAddNewInstruction = (
    e,
    newInstructionValue,
    newRecipeInstructions
  ) => {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * 10000 + 10);
    if (newInstructionValue.length === 0 || newInstructionValue.length > 150) {
      setNewRecipeInstructionError(true);
    } else {
      setNewRecipeInstructionError(false);
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          instructions: [
            ...newRecipeInstructions,
            { name: newInstructionValue, id: randomNumber },
          ],
        };
      });
      setNewRecipeInstruction("");
    }
  };

  //New IngredientValidation
  const handleNewIngredientValidation = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length === 0 || value.length > 50) {
      setNewRecipeIngredient(value);
      setNewRecipeIngredientError(true);
    } else {
      setNewRecipeIngredient(value);
      setNewRecipeIngredientError(false);
    }
  };

  // validation of adding new Ingredient different validation coz new instruction can has 150 signs new ingredient only 50
  const handleAddNewIngredient = (
    e,
    newIngredientValue,
    newRecipeIngredients
  ) => {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * 10000 + 10);
    if (newIngredientValue.length === 0 || newIngredientValue.length > 50) {
      setNewRecipeIngredientError(true);
    } else {
      setNewRecipeIngredientError(false);
      setNewRecipe((prevState) => {
        return {
          ...prevState,
          ingredients: [
            ...newRecipeIngredients,
            { name: newIngredientValue, id: randomNumber },
          ],
        };
      });
      setNewRecipeIngredient("");
    }
  };

  //Delete Element

  const handleDeleteElement = (e, array, elementToDelete, arrayToEdit) => {
    e.preventDefault();
    let newArray = array.filter((element) => element.id !== elementToDelete);
    setNewRecipe((prevState) => {
      return {
        ...prevState,
        [arrayToEdit]: newArray,
      };
    });
  };

  //EditElement
  const handleSaveEditedElement = (
    e,
    array,
    elementToSave,
    newName,
    arrayToEdit
  ) => {
    e.preventDefault();
    const newArray = array.map((element) => {
      if (element.id === elementToSave) {
        element.name = newName;
        return element;
      }
      return element;
    });
    setNewRecipe((prevState) => {
      return {
        ...prevState,
        [arrayToEdit]: newArray,
      };
    });
  };
  // this button will hide/show recipes list (when user click button add new recipe when will be on recipe list it will move him to add new recipe section
  const handleRecipeList = (e) => {
    e.preventDefault();
    setRecipesList(false);
  };

  //handle edit whole recipe after click this button user will be able to edit his saved recipe include title,description,ingredients and instructions
  const handleEditRecipe = (e, idOfRecipe, userId) => {
    e.preventDefault();
    db.collection("users")
      .doc(userId)
      .collection("recipes")
      .doc(idOfRecipe)
      .get()
      .then((data) => {
        let dataToDisplay = data.data();
        dataToDisplay.id = data.id;
        setNewRecipe(dataToDisplay);
        setRecipesList(false);
        setNewOrEdit("edit");
      })
      .catch((e) => {
        setEditRecipesError(true);
      });
  };

  // here we save recipe which was edited
  const handleSaveEditedRecipe = (
    e,
    newRecipeTitle,
    newRecipeDescription,
    newRecipeInstructions,
    newRecipeIngredients,
    userId,
    elementId
  ) => {
    e.preventDefault();
    if (newRecipeTitle.length <= 0 || newRecipeTitle.length > 50) {
      setNewRecipeTitleError(true);
    }
    if (newRecipeDescription.length <= 0 || newRecipeDescription.length > 150) {
      setNewRecipeDescriptionError(true);
    }
    if (newRecipeInstructions.length === 0) {
      setNewRecipeInstructionError(true);
    }
    if (newRecipeIngredients.length === 0) {
      setNewRecipeIngredientError(true);
    } else if (
      newRecipeIngredients.length > 0 &&
      newRecipeInstructions.length > 0 &&
      newRecipeDescription.length > 0 &&
      newRecipeDescription.length <= 150 &&
      newRecipeTitle.length > 0 &&
      newRecipeTitle.length <= 50
    ) {
      setNewRecipeTitleError(false);
      setNewRecipeDescriptionError(false);
      setRecipesList(true);
      db.collection("users")
        .doc(userId)
        .collection("recipes")
        .doc(elementId)
        .set(newRecipe)
        .then((data) => {
          setNewOrEdit("new");
          setNewRecipe({
            id: "",
            title: "",
            description: "",
            instructions: [],
            ingredients: [],
          });
        });
    }
  };

  return (
    <section className="recipes">
      {!recipesList && (
        <Container fluid className="pr-4 pl-4 pr-md-5 pl-md-5 h-100">
          <Row className="h-100">
            <RecipesDescription
              newRecipe={newRecipe}
              handleSaveEditedRecipes={handleSaveEditedRecipe}
              newOrEdit={newOrEdit}
              instructionsValue={newRecipe.instructions}
              ingredientsValue={newRecipe.ingredients}
              addNewRecipe={handleAddNewRecipe}
              titleValue={newRecipe.title}
              descriptionValue={newRecipe.description}
              onTitleValidation={handleRecipeTittleValidation}
              titleError={newRecipeTitleError}
              onDescriptionValidation={handleRecipeDescriptionValidation}
              descriptionError={newRecipeDescriptionError}
            />
            <RecipesInstructions
              saveEditedElement={handleSaveEditedElement}
              deleteElement={handleDeleteElement}
              addNewInstruction={handleAddNewInstruction}
              newRecipe={newRecipe}
              newInstructionError={newRecipeInstructionError}
              newInstructionValue={newRecipeInstruction}
              instructionValidation={handleNewInstructionValidation}
            />
            <RecipesIngredients
              saveEditedElement={handleSaveEditedElement}
              deleteElement={handleDeleteElement}
              addNewIngredient={handleAddNewIngredient}
              newRecipe={newRecipe}
              newIngredientError={newRecipeIngredientError}
              newIngredientValue={newRecipeIngredient}
              ingredientValidation={handleNewIngredientValidation}
            />
          </Row>
        </Container>
      )}
      {recipesList && (
        <RecipesList
          editExistingRecipe={handleEditRecipe}
          moveToAddNewRecipeSection={handleRecipeList}
        />
      )}
    </section>
  );
};
