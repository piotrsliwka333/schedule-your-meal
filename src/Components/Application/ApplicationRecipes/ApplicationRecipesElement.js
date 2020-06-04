import React, {useState} from "react";

export const ApplicationRecipesElement = (props) => {
	const {text,editElement,deleteElement,elementToDel,newRecipe,saveEdited} = props
	const [disabled,setDisabled] = useState(true)
	const [editedArray,setEditedArray] = useState(newRecipe)
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

	const handleSaveAndSetDisabled = (e,newRecipe,elementToDel,startInputValue) => {

		saveEdited(e,newRecipe,elementToDel,startInputValue);
		setDisabled(true)
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
				<button className='recipes-element__delete-button ' onClick={e => deleteElement(e,newRecipe.instructions,elementToDel)}>
					<i className="far fa-trash-alt"/>
				</button>
				{!disabled && <button onClick={e => handleSaveAndSetDisabled(e,newRecipe,elementToDel,startInputValue)} className='recipes-element__save-button'><i className="fas fa-save"/></button>}
			</div>
		</li>
	)
}