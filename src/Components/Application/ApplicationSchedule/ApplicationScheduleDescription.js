import React from "react";
import {Col} from "react-bootstrap";

export const ApplicationScheduleDescription = (props) => {
	const {id,handleSaveEditedSchedule,newOrEdit,weekNumberValue,addNewSchedule,titleValue,descriptionValue,titleError,descriptionError,setDescription,setTitle} = props

	const handleCheckSetDescription = (e) => {
		if(typeof setDescription === 'function') {
			setDescription(e)
		}
	}

	const handleCheckSetTitle = (e) => {
		if(typeof setTitle === 'function') {
			setTitle(e)
		}
	}

	const handleCheckAddOrSaveEditedNewSchedule = (e,weekNumberValue,elementId) => {
		if(typeof addNewSchedule === 'function' && newOrEdit === 'new') {
			addNewSchedule(e,weekNumberValue)
		} if(typeof handleSaveEditedSchedule === 'function' && newOrEdit === 'edit') {
			handleSaveEditedSchedule(e,weekNumberValue,elementId)
		}
	}
	return(
		<Col className='recipes__description col-12 p-0'>
			<form onSubmit={e => handleCheckAddOrSaveEditedNewSchedule(e,weekNumberValue,id)}
				className='description-form'>
				<div className='description-form__box'>
					<h1 className='description-form__title highlight'>Nowy Plan</h1>
					<button type='submit' className='description-form__button home-button'>Zapisz zamknij</button>
				</div>
				<div className='description-form__box'>
					<label className='description-form__label'>Nazwa Planu</label>
					<input value={titleValue} onChange={e => handleCheckSetTitle(e)}
					       className={titleError ? 'description-form__input error' : 'description-form__input'}
					       type='text' name='title' placeholder='Podaj nazwę przepisu '/>
					{titleError && <p
						className='error-message'>{titleValue.length > 50 ? 'nazwa nie może być dłuższa niż 50 znaków' : 'pole nie może zostać puste !'}</p>}
				</div>
				<div className='description-form__box'>
					<label className='description-form__label'>Opis Przepisu</label>
					<textarea value={descriptionValue} onChange={e => handleCheckSetDescription(e)}
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