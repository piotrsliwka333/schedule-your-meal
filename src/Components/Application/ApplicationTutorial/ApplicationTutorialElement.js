import React from "react";

export const ApplicationTutorialElement = (props) => {
	const {title, text, image, nextPage, previousPage} = props

	const checkNextPage = (e) => {
		if (typeof nextPage === 'function') {
			nextPage(e)
		}
	}

	const checkPreviousPage = (e) => {
		if (typeof previousPage === 'function') {
			previousPage(e)
		}
	}
	return (
		<div className='tutorial-element'>
			<h3 className='tutorial-element__title'>{title}</h3>
			<img className='tutorial-element__image' src={image}/>
			<p className='tutorial-element__text'>{text}</p>
			<div className='btn-container'>
				<button onClick={e => checkPreviousPage(e)} className='home-button tutorial-element__btn left'>Poprzednia
					Strona
				</button>
				<button onClick={e => checkNextPage(e)} className='home-button tutorial-element__btn right'>Następna Strona
				</button>
			</div>
		</div>
	)
}