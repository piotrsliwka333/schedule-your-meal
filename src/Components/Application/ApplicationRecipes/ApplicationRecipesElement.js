import React, {useState} from "react";

export const ApplicationRecipesElement = (props) => {
	const {saveEditedElement,deleteElement,text,name,array,elementToEditOrDelete,arrayToEdit} = props
	const [disabled,setDisabled] = useState(true)
	const [startInputValue,setStartInputValue] = useState(text)
	const handleEdit = (e) => {
		e.preventDefault();
		setDisabled(false)
	}

	const handleEditInputValue = (e)=> {
		const {value} = e.target
		if(value.length > 0 && value.length) {
			setStartInputValue(value)
		}
	}

	const handleCheckDeleteElement = (e,array,elementToDelete,editArray) => {
		if(typeof deleteElement === 'function') {
			deleteElement(e,array,elementToDelete,editArray)
		}
	}

	const handleCheckSaveEditedElement = (e,array,elementToSave,newName,arrayToEdit) => {
		if (typeof saveEditedElement === 'function') {
			saveEditedElement(e,array,elementToSave,newName,arrayToEdit);
			setDisabled(true)
		}
	}





	const style = {
		border: !disabled ? '1px solid gray' : 'none',
		background: 'transparent',
	}

	return(
		<li className='recipes-element'>
			<input onChange={e => handleEditInputValue(e)}  style={style} disabled={disabled} value={startInputValue} className='recipes-element__text'/>
			<div className='recipes-element__icon-box'>
				<button onClick={e => handleEdit(e)} className='recipes-element__edit-button '>
					<i className="far fa-edit"/>
				</button>
				<button onClick={e => handleCheckDeleteElement(e,array,elementToEditOrDelete,arrayToEdit)} className='recipes-element__delete-button '>
					<i className="far fa-trash-alt"/>
				</button>
				{!disabled && <button name={name} onClick={e => handleCheckSaveEditedElement(e,array,elementToEditOrDelete,startInputValue,arrayToEdit)}  className='recipes-element__save-button'><i className="fas fa-save"/></button>}
			</div>
		</li>
	)
}