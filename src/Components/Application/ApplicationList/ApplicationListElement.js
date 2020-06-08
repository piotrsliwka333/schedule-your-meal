import React from "react";

export const ApplicationListElement = (props) => {
	const {name,description,editElement,deleteElement} = props
	return(
		<div className='list-element'>
			<p className='list-element__text name'>{name}</p>
			<p className='list-element__text description'>{description}</p>
			<div className='list-element__action-box action'>
				<button className='list-element__button delete'>
					<i className="far fa-edit"/>
				</button>
				<button className='list-element__button edit'>
					<i className="far fa-trash-alt"/>
				</button>
			</div>
		</div>
	)
}