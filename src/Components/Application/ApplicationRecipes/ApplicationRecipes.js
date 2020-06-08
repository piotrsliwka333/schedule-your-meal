import React, {useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import * as firebase from "firebase";
import {ApplicationRecipesList} from "./ApplicationRecipesList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {ApplicationRecipesDescription} from "./ApplicationRecipesDescription";
import {ApplicationRecipesInstructions} from "./ApplicationRecipesInstructions";
import {ApplicationRecipesIngredients} from "./ApplicationRecipesIngredients";


export const ApplicationRecipes = data => {
	const [recipesList,setRecipesList] = useState(true)
	const [newRecipe, setNewRecipe] = useState({
		title: '',
		description: '',
		instructions: [],
		ingredients: []
	})

	// Errors state
	const [newRecipeTitleError, setNewRecipeTitleError] = useState(false)
	const [newRecipeDescriptionError, setNewRecipeDescriptionError] = useState(false)
	const [newRecipeInstructionError, setNewRecipeInstructionError] = useState(false)
	const [newRecipeIngredientError, setNewRecipeIngredientError] = useState(false)


	// Instructions state

	const [newRecipeInstruction, setNewRecipeInstruction] = useState('')
	const [newRecipeIngredient, setNewRecipeIngredient] = useState('')


	//References recipes Collections
	let recipesRef = firebase.database().ref('recipes')
	let db = firebase.firestore()
	let user = firebase.auth().currentUser

	const handleAddNewRecipe = (e, newRecipeTitle, newRecipeDescription, newRecipeInstructions, newRecipeIngredients) => {
		e.preventDefault();
		if (newRecipeTitle.length <= 0 || newRecipeTitle.length > 50) {
			setNewRecipeTitleError(true)
		}
		if (newRecipeDescription.length <= 0 || newRecipeDescription.length > 150) {
			setNewRecipeDescriptionError(true)
		}
		if (newRecipeInstructions.length === 0) {
			setNewRecipeInstructionError(true)
		}
		if (newRecipeIngredients.length === 0) {
			setNewRecipeIngredientError(true)
		} else if (newRecipeIngredients.length > 0 && newRecipeInstructions.length > 0 && (newRecipeDescription.length > 0 && newRecipeDescription.length <= 150) && (newRecipeTitle.length > 0 && newRecipeTitle.length <= 50)) {
			setNewRecipeTitleError(false)
			setNewRecipeDescriptionError(false)
			setRecipesList(true)
			let newRecipeRef = recipesRef.push();
			db.collection('users').doc(user.uid).collection('recipes').add(newRecipe).then(data => console.log(data))
			newRecipeRef.set(newRecipe).then(r => {

				console.log('dane wysłane :)')
				setNewRecipe({
					id: '',
					title: '',
					description: '',
					instructions: [],
					ingredients: []
				})
			});
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
		const {value} = e.target;
		if (value.length === 0 || value.length > 150) {
			setNewRecipeInstruction(value)
			setNewRecipeInstructionError(true)
		} else {
			setNewRecipeInstruction(value)
			setNewRecipeInstructionError(false)
		}
	}

	//validation of adding newInstruction
	const handleAddNewInstruction = (e, newInstructionValue, newRecipeInstructions) => {
		e.preventDefault();
		let randomNumber = Math.floor(Math.random() * 10000 + 10)
		if (newInstructionValue.length === 0 || newInstructionValue.length > 150) {
			setNewRecipeInstructionError(true)
		} else {
			setNewRecipeInstructionError(false)
			setNewRecipe(prevState => {
				return {
					...prevState,
					instructions: [...newRecipeInstructions, {name: newInstructionValue, id: randomNumber}]
				}
			})
			setNewRecipeInstruction('')
		}
	}

	//New IngredientValidation
	const handleNewIngredientValidation = (e) => {
		e.preventDefault();
		const {value} = e.target;
		if (value.length === 0 || value.length > 50) {
			setNewRecipeIngredient(value)
			setNewRecipeIngredientError(true)
		} else {
			setNewRecipeIngredient(value)
			setNewRecipeIngredientError(false)
		}
	}


	// validation of adding new Ingredient different validation coz new instruction can has 150 signs new ingredient only 50
	const handleAddNewIngredient = (e, newIngredientValue, newRecipeIngredients) => {
		e.preventDefault();
		let randomNumber = Math.floor(Math.random() * 10000 + 10)
		if (newIngredientValue.length === 0 || newIngredientValue.length > 50) {
			setNewRecipeIngredientError(true)
		} else {
			setNewRecipeIngredientError(false)
			setNewRecipe(prevState => {
				return {
					...prevState,
					ingredients: [...newRecipeIngredients, {name: newIngredientValue, id: randomNumber}]
				}
			})
			setNewRecipeIngredient('')
		}
	}

	//Delete Element

	const handleDeleteElement = (e, array, elementToDelete, arrayToEdit) => {
		e.preventDefault()
		let newArray = array.filter(element => element.id !== elementToDelete)

		setNewRecipe(prevState => {
			return {
				...prevState,
				[arrayToEdit]: newArray
			}
		})

	}

	//EditElement

	const handleSaveEditedElement = (e, array, elementToSave, newName, arrayToEdit) => {
		e.preventDefault();
		const newArray = array.map(element => {

			if (element.id === elementToSave) {
				element.name = newName
				return element
			}
			return element
		})

		setNewRecipe(prevState => {

			return {
				...prevState,
				[arrayToEdit]: newArray
			}
		})
	}
	// this button will hide/show recipes list (when user click button add new recipe when will be on recipe list it will move him to add new recipe section
	const handleRecipeList = (e) => {
		e.preventDefault()
		setRecipesList(false)
	}


	return (
		<ApplicationTemplate>
			<section className='recipes'>
				{!recipesList &&
				<Container fluid className='pr-4 pl-4 pr-md-5 pl-md-5 h-100'>
					<Row className='h-100'>
						<ApplicationRecipesDescription instructionsValue={newRecipe.instructions}
						                               ingredientsValue={newRecipe.ingredients}
						                               addNewRecipe={handleAddNewRecipe}
						                               titleValue={newRecipe.title}
						                               descriptionValue={newRecipe.description}
						                               onTitleValidation={handleRecipeTittleValidation}
						                               titleError={newRecipeTitleError}
						                               onDescriptionValidation={handleRecipeDescriptionValidation}
						                               descriptionError={newRecipeDescriptionError}/>
						<ApplicationRecipesInstructions saveEditedElement={handleSaveEditedElement}
						                                deleteElement={handleDeleteElement}
						                                addNewInstruction={handleAddNewInstruction} newRecipe={newRecipe}
						                                newInstructionError={newRecipeInstructionError}
						                                newInstructionValue={newRecipeInstruction}
						                                instructionValidation={handleNewInstructionValidation}/>
						<ApplicationRecipesIngredients saveEditedElement={handleSaveEditedElement}
						                               deleteElement={handleDeleteElement}
						                               addNewIngredient={handleAddNewIngredient}
						                               newRecipe={newRecipe}
						                               newIngredientError={newRecipeIngredientError}
						                               newIngredientValue={newRecipeIngredient}
						                               ingredientValidation={handleNewIngredientValidation}/>
					</Row>
				</Container>}
				{recipesList && <ApplicationRecipesList moveToAddNewRecipeSection={handleRecipeList}/>}
			</section>
		</ApplicationTemplate>
	)
}