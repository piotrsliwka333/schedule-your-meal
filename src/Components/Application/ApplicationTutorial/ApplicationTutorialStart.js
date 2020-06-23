import React from 'react';

export const ApplicationTutorialStart = (props) => {
	const {closeTutorial} = props

	const checkCloseTutorial = (e) => {
		if (typeof closeTutorial === 'function') {
			closeTutorial(e)
		}
	}
	return (
		<div className='tutorial-start'>
			<h4 className='tutorial-start__title'>Zaplanujemy coś pysznego :)</h4>
			<button onClick={e => checkCloseTutorial(e)} className='home-button tutorial-start__btn'>Zacznij planować !
			</button>
		</div>
	)
}