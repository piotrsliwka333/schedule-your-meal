import React from "react";

export const ApplicationListHeader = (props) => {
	const {title, moveToAddNewRecipeSection} = props

	const handleCheckMoveToAddNewRecipeSection = (e) => {
		if (typeof moveToAddNewRecipeSection === 'function') {
			moveToAddNewRecipeSection(e);
		}
	}

	return (
		<div className='list-header'>
			<h3 className='list__title'>{title}</h3>
			<button onClick={e => handleCheckMoveToAddNewRecipeSection(e)} className='list__button'>
				<i className="fas fa-plus-square"/>
			</button>
		</div>
	)
}