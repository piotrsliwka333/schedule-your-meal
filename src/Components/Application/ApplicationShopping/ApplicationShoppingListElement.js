import React from "react";

export const ApplicationShoppingListElement = (props) => {
	const {name,id} = props
	return (
		<div className='element'>
			<span className='element__name'>{name}</span>
			<div className='action-container'>
				<button className='element-btn edit-btn'>
					<i className="far fa-edit"/>
				</button>
				<button className='element-btn delete-btn'>
					<i className="far fa-trash-alt"/>
				</button>
				<button className='element-btn complete-btn'>
					<i className="far fa-check-circle"/>
				</button>
			</div>
		</div>
	)
}