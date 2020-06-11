import React from "react";

export const ApplicationScheduleWeekNumber = (props) => {
	const {setWeekNumber,weekNumberError,weekNumberValue} = props

	const handleCheckSetWeekNumber = (e) => {
		if(typeof setWeekNumber === 'function') {
			setWeekNumber(e)
		}
	}



	return (
		<div className='week-number' >
			<label className='week-number__text'>Numer Tygodnia</label>
			<input onChange={e => handleCheckSetWeekNumber(e)} className={weekNumberError ? 'week-number__input error' : 'week-number__input'} type='text'/>
			{weekNumberError && <p className='error-message'>error</p>}
		</div>
	)
}