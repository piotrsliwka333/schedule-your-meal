import React from "react";

export const ApplicationShoppingNavigationElement = (props) => {
	const {name,addToList} = props

	const checkAddToList = (e,name) => {
		if(typeof addToList === 'function') {
			addToList(e,name)
		}
	}
	return (
		<div className='navigation-element'>
			<span className='navigation-element__name'>{name}</span>
			<button onClick={e => checkAddToList(e,name)} className='navigation-element__btn home-button'>Dodaj do listy</button>
		</div>
	)
}