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

	// Errors state
	const [newRecipeTitleError, setNewRecipeTitleError] = useState(false)
	const [newRecipeDescriptionError, setNewRecipeDescriptionError] = useState(false)
	const [newRecipeInstructionsError, setNewRecipeInstructionsError] = useState(false)
	const [newRecipeIngredientsError, setNewRecipeIngredientsError] = useState(false)
	const [newRecipeInstructionError, setNewRecipeInstructionError] = useState(false)
	const [newRecipeIngredientError, setNewRecipeIngredientError] = useState(false)


	// Instructions state

	const [newRecipeInstruction,setNewRecipeInstruction] = useState('')
	const [newRecipeIngredient,setNewRecipeIngredient] = useState('')

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




	//validation for newInstruction on Input
	const handleNewInstructionValidation = (e) => {
		e.preventDefault();
		const {name,value} = e.target;
		if(value.length === 0 || value.length > 150) {
			setNewRecipeInstruction(value)
			setNewRecipeInstructionError(true)
		} else {
			setNewRecipeInstruction(value)
			setNewRecipeInstructionError(false)
		}

	}

	//validation of adding newInstruction
	const handleAddNewInstruction = (e,newInstructionValue,newRecipeInstructions) => {
		e.preventDefault();
		let randomNumber = Math.floor(Math.random() * 10000 + 10)
		if(newInstructionValue.length === 0 || newInstructionValue.length > 150) {
			setNewRecipeInstructionError(true)
		} else {
			setNewRecipeInstructionError(false)
			setNewRecipe(prevState => {
				return {
					...prevState,
					instructions: [...newRecipeInstructions, {name:newInstructionValue, id: randomNumber}]
				}
			})
			setNewRecipeInstruction('')
		}

	}

	//New IngredientValidation
	const handleNewIngredientValidation = (e) => {
		e.preventDefault();
		const {name,value} = e.target;
		if(value.length === 0 || value.length > 50) {
			setNewRecipeIngredient(value)
			setNewRecipeIngredientError(true)
		} else {
			setNewRecipeIngredient(value)
			setNewRecipeIngredientError(false)
		}

	}

	const handleAddNewIngredient = (e,newIngredientValue,newRecipeIngredients) => {
		e.preventDefault();
		if(newIngredientValue.length === 0 || newIngredientValue.length > 50) {
			setNewRecipeIngredientError(true)
		} else {
			setNewRecipeIngredientError(false)
			setNewRecipe(prevState => {
				return {
					...prevState,
					ingredients: [...newRecipeIngredients,newIngredientValue]
				}
			})
			setNewRecipeIngredient('')
		}
	}

	//delete instruction
	const handleDeleteInstruction = (e,newRecipeInstructions,elementToDelete) => {
		e.preventDefault();
		const newArray = newRecipeInstructions.filter((element) => element.id !== elementToDelete)
		setNewRecipe(prevState => {

			return {
				...prevState,
				instructions: newArray
			}
		})
	}

	//Save Edited Instruction

	const handleSaveEditInstruction = (e,newRecipes,elementToSave,newName) => {
		e.preventDefault();
		const newArray = newRecipes.instructions.map(element => {
			console.log(element.id )
			console.log(elementToSave)
			if(element.id === elementToSave) {
				element.name = newName
				return element
			}
			return element
		})
		console.log(newArray)
		setNewRecipe(prevState => {

			return {
				...prevState,
				instructions: newArray
			}
		})
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
						<ApplicationRecipesInstructions saveEdited={handleSaveEditInstruction} deleteInstruction={handleDeleteInstruction} newRecipe={newRecipe} addNewInstruction={handleAddNewInstruction} newInstructionError={newRecipeInstructionError}  newInstructionValue={newRecipeInstruction} instructionValidation={handleNewInstructionValidation}/>
						<ApplicationRecipesIngredients newRecipe={newRecipe} addNewIngredient={handleAddNewIngredient} newIngredientError={newRecipeIngredientError}  newIngredientValue={newRecipeIngredient} ingredientValidation={handleNewIngredientValidation}/>
					</Row>
				</Container>
			</section>
		</ApplicationTemplate>
	)
}