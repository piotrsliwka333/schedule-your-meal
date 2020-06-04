import React from "react";
import {ApplicationRecipesElements} from "./ApplicationRecipesElements";
import {ApplicationRecipesElement} from "./ApplicationRecipesElement";
import {Col} from "react-bootstrap";

export const ApplicationRecipesIngredients = (props) => {
	const {newRecipe,ingredientValidation,newIngredientValue,newIngredientError,addNewIngredient} = props

	const handleCheckIngredientValidation = (e) => {
		if(typeof ingredientValidation === 'function') {
			ingredientValidation(e);
		}
	}

	const handleCheckAddIngredient = (e,newInstructionValue,newRecipesIngredients) => {
		if(typeof addNewIngredient === 'function') {
			addNewIngredient(e,newInstructionValue,newRecipesIngredients)
		}
	}

	return(
		<Col className='recipes__ingredients col-12 col-md-6 col-xl-6'>
			<h2 className='recipes__ingredients__title'>Składniki</h2>
			<form onSubmit={e => handleCheckAddIngredient(e,newIngredientValue,newRecipe.ingredients)} className='ingredients-form'>
				<div className='ingredients-form-wrapper'>
					<input onChange={e => handleCheckIngredientValidation(e)} value={newIngredientValue} placeholder='podaj nazwę składnika' className={newIngredientError ? 'ingredients-form__input error' : 'ingredients-form__input'}/>
					<button type='submit' className='ingredients-form__button'>
						<i className="fas fa-plus-square"/>
					</button>
					{newIngredientError &&
					<p className='error-message'>{newIngredientValue.length > 150 ? 'max 150 znaków' : 'pole nie może być puste'}</p>}
				</div>
			</form>
			<ApplicationRecipesElements>

			</ApplicationRecipesElements>
		</Col>
	)
}