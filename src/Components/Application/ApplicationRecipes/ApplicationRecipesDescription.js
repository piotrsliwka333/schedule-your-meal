import React from "react";
import {Col} from "react-bootstrap";

export const ApplicationRecipesDescription = (props) => {
	const {addNewRecipe, instructionsValue, ingredientsValue, titleValue, descriptionValue, onTitleValidation, onDescriptionValidation, descriptionError, titleError} = props

	const handleCheckTitleValidation = (e) => {
		if (typeof onTitleValidation === 'function') {
			onTitleValidation(e);
		}
	}

	const handleCheckDescriptionValidation = (e) => {
		if (typeof onDescriptionValidation === 'function') {
			onDescriptionValidation(e);
		}
	}

	const handleCheckAddNewRecipe = (e, title, description, instructions, ingredients) => {
		if (typeof addNewRecipe === 'function') {
			addNewRecipe(e, title, description, instructions, ingredients);
		}
	}

	return (
		<Col className='recipes__description col-12'>
			<form
				onSubmit={e => handleCheckAddNewRecipe(e, titleValue, descriptionValue, instructionsValue, ingredientsValue)}
				className='description-form'>
				<div className='description-form__box'>
					<h1 className='description-form__title highlight'>Nowy Przepis</h1>
					<button type='submit' className='description-form__button home-button'>Zapisz zamknij</button>
				</div>
				<div className='description-form__box'>
					<label className='description-form__label'>Nazwa Przepisu</label>
					<input onChange={e => handleCheckTitleValidation(e)} value={titleValue}
					       className={titleError ? 'description-form__input error' : 'description-form__input'}
					       type='text' name='title' placeholder='Podaj nazwę przepisu '/>
					{titleError && <p
						className='error-message'>{titleValue.length > 50 ? 'nazwa nie może być dłuższa niż 50 znaków' : 'pole nie może zostać puste !'}</p>}
				</div>
				<div className='description-form__box'>
					<label className='description-form__label'>Opis Przepisu</label>
					<textarea onChange={e => handleCheckDescriptionValidation(e)} value={descriptionValue}
					          name='description'
					          className={descriptionError ? 'description-form__textarea error' : 'description-form__textarea'}
					          placeholder='Podaj opis przepisu'>
					</textarea>
					{descriptionError && <p
						className='error-message__textarea'>{descriptionValue.length > 150 ? 'nazwa to max 150 znaków' : 'pole nie może zostać puste !'}</p>}
				</div>
			</form>
		</Col>
	)
}