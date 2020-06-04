import React, {useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import {Container, Row} from "react-bootstrap";
import {ApplicationRecipesDescription} from "./ApplicationRecipesDescription";
import {ApplicationRecipesInstructions} from "./ApplicationRecipesInstructions";
import {ApplicationRecipesIngredients} from "./ApplicationRecipesIngredients";

export const ApplicationRecipes = () => {
	const [newRecipe, setNewRecipe] = useState({
		title: '',
		description: '',
		instructions: [],
		ingredients: []
	})
	const [newRecipeTitleError, setNewRecipeTitleError] = useState(false)
	const [newRecipeDescriptionError, setNewRecipeDescriptionError] = useState(false)
	const [newRecipeInstructionsError, setNewRecipeInstructionsError] = useState(false)
	const [newRecipeIngredientsError, setNewRecipeIngredientsError] = useState(false)

	const handleAddNewRecipe = (e, newRecipeTitle, newRecipeDescription, newRecipeInstructions, newRecipeIngredients) => {
		e.preventDefault();
		if (newRecipeTitle.length <= 0 || newRecipeTitle.length > 50) {
			setNewRecipeTitleError(true)
		}
		if (newRecipeDescription.length <= 0 || newRecipeDescription.length > 150) {
			setNewRecipeDescriptionError(true)
		}
		if (newRecipeInstructions.length === 0) {
			setNewRecipeInstructionsError(true)
		}
		if (newRecipeIngredients.length === 0) {
			setNewRecipeIngredientsError(true)
		} else {
			setNewRecipeTitleError(false)
			setNewRecipeDescriptionError(false)
			setNewRecipeInstructionsError(false)
			setNewRecipeIngredientsError(false)

			console.log('dane wysłane :)')
			setNewRecipe({
				title: '',
				description: '',
				instructions: [],
				ingredients: []
			})
		}
	}

	// validation for recipeTitle

	const handleRecipeTittleValidation = (e) => {
		const {value, name} = e.target

		if (value.length === 0 || value.length > 50) {
			setNewRecipeTitleError(true)
			setNewRecipe(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
		} else {
			setNewRecipeTitleError(false)
			setNewRecipe(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
		}
	}

	//validation for recipeDescription
	const handleRecipeDescriptionValidation = (e) => {
		const {value, name} = e.target

		if (value.length === 0 || value.length > 150) {
			setNewRecipeDescriptionError(true)
			setNewRecipe(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
		} else {
			setNewRecipeDescriptionError(false)
			setNewRecipe(prevState => {
				return {
					...prevState,
					[name]: value
				}
			})
		}
	}


	return (
		<ApplicationTemplate>
			<section className='recipes'>
				<Container fluid className='pr-4 pl-4 pr-md-5 pl-md-5 h-100'>
					<Row className='h-100'>
						<ApplicationRecipesDescription instructionsValue={newRecipe.instructions}
						                               ingredientsValue={newRecipe.ingredients} addNewRecipe={handleAddNewRecipe}
						                               titleValue={newRecipe.title}
						                               descriptionValue={newRecipe.description}
						                               onTitleValidation={handleRecipeTittleValidation}
						                               titleError={newRecipeTitleError}
						                               onDescriptionValidation={handleRecipeDescriptionValidation}
						                               descriptionError={newRecipeDescriptionError}/>
						<ApplicationRecipesInstructions/>
						<ApplicationRecipesIngredients/>
					</Row>
				</Container>
			</section>
		</ApplicationTemplate>
	)
}