import React, {useState} from "react";

export const ApplicationRecipesElement = (props) => {
	const {text,editElement,deleteElement} = props
	const [editable,setEditable] = useState(false)
	return(
		<li className='recipes-element'>
			<span contentEditable={editable} className='recipes-element__text'>{text}</span>
			<div className='recipes-element__icon-box'>
				<button className='recipes-element__edit-button '>
					<i className="far fa-edit"/>
				</button>
				<button className='recipes-element__delete-button '>
					<i className="far fa-trash-alt"/>
				</button>
			</div>
		</li>
	)
}