import React from "react";

export const ApplicationListDescription = (props) => {
	const {title} = props

	return(
		<div className='list-description'>
			<p className='list-description__text name'>Nazwa</p>
			<p className='list-description__text description'>Opis</p>
			<p className='list-description__text action'>Akcje</p>
		</div>
	)
}