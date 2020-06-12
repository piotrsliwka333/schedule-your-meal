import React from "react";

export const ApplicationDesktopScheduleButtons = (props) => {
	const {nextWeek,prevWeek} = props

	const handleCheckNextWeek = (e) => {
		if (typeof nextWeek === 'function') {
			nextWeek(e)
		}
	}

	const handleCheckPrevWeek = (e) => {
		if (typeof prevWeek === 'function') {
			prevWeek(e)
		}
	}

	return (
		<div className='desktop__schedule__buttons'>
			<button onClick={e => handleCheckPrevWeek(e)} className='desktop__schedule__button left'>poprzedni</button>
			<button onClick={e => handleCheckNextWeek(e)} className='desktop__schedule__button right'>następny</button>
		</div>
	)
}