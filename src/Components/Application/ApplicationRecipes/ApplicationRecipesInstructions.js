import React from "react";
import {Col} from "react-bootstrap";
import {ApplicationRecipesElements} from "./ApplicationRecipesElements";
import {ApplicationRecipesElement} from "./ApplicationRecipesElement";

export const ApplicationRecipesInstructions = (props) => {
	const {saveEditedElement,deleteElement, addNewInstruction, newRecipe, instructionValidation, newInstructionValue, newInstructionError} = props

	const handleCheckInstructionValidation = (e) => {
		if (typeof instructionValidation === 'function') {
			instructionValidation(e)
		}
	}

	const handleCheckAddInstruction = (e, newInstructionValue, newRecipeInstructions) => {
		if (typeof addNewInstruction === 'function') {
			addNewInstruction(e, newInstructionValue, newRecipeInstructions)
		}
	}


	return (
		<Col className='recipes__instructions col-12 col-md-6 col-xl-6 h-35'>
			<h2 className='recipes__instructions__title'>INSTRUKCJE</h2>
			<form onSubmit={e => handleCheckAddInstruction(e, newInstructionValue, newRecipe.instructions)}
			      className='instructions-form'>
				<textarea onChange={e => handleCheckInstructionValidation(e)} value={newInstructionValue}
				          placeholder='podaj treść instrukcji'
				          className={newInstructionError ? 'instructions-form__textarea error' : 'instructions-form__textarea'}/>
				<button type='submit' className='instructions-form__button'>
					<i className="fas fa-plus-square"/>
				</button>
				{newInstructionError &&
				<p
					className='error-message'>{newInstructionValue.length > 150 ? 'max 150 znaków' : 'pole nie może być puste'}</p>}
			</form>
			<ApplicationRecipesElements>
				{newRecipe.instructions.map((element) => {

					return (
						<ApplicationRecipesElement saveEditedElement={saveEditedElement}  arrayToEdit={'instructions'}    array={newRecipe.instructions}
						                           elementToEditOrDelete={element.id} deleteElement={deleteElement} key={element.id}
						                           text={element.name}/>
					)
				})}
			</ApplicationRecipesElements>
		</Col>
	)
}