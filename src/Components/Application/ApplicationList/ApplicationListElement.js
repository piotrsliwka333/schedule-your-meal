import React from "react";

export const ApplicationListElement = (props) => {
	const {name, description, editElement, deleteElement, elementToEditOrDelete, userUid} = props

	const handleCheckDeleteElement = (e, key, userUid) => {
		if (typeof deleteElement === 'function') {
			deleteElement(e, key, userUid)
		}
	}

	const handleCheckEditElement = (e, elementId, userUid) => {
		if (typeof editElement === 'function') {
			editElement(e, elementId, userUid)
		}
	}

	return (
		<div className='list-element'>
			<p className='list-element__text name'>{name}</p>
			<p className='list-element__text description'>{description}</p>
			<div className='list-element__action-box action'>
				<button onClick={e => handleCheckEditElement(e, elementToEditOrDelete, userUid)}
				        className='list-element__button edit'>
					<i className="far fa-edit"/>
				</button>
				<button onClick={e => handleCheckDeleteElement(e, elementToEditOrDelete, userUid)}
				        className='list-element__button delete'>
					<i className="far fa-trash-alt"/>
				</button>
			</div>
		</div>
	)
}