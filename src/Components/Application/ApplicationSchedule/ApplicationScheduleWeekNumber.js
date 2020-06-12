import React, {useEffect, useState} from "react";

export const ApplicationScheduleWeekNumber = (props) => {
	const {setWeekNumber,weekNumberError,weekNumberValue} = props
	const [error,setError] = useState(weekNumberError)

	useEffect(()=> {
		setError(weekNumberError)
	},[weekNumberError])


	const handleCheckSetWeekNumber = (e) => {
		if(typeof setWeekNumber === 'function') {
			setWeekNumber(e)
		}
	}



	return (
		<div className='week-number' >
			<label className='week-number__text'>Numer Tygodnia</label>
			<input value={weekNumberValue} onChange={e => handleCheckSetWeekNumber(e)} className={error ? 'week-number__input error' : 'week-number__input'} type='text'/>
			{error && <p className='error-message'>error</p>}
		</div>
	)
}