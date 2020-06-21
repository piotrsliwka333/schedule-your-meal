import React from "react";

export const ApplicationDesktopScheduleElement = (props) => {
	const {day, breakfast, secondBreakfast, soup, dinner, supper} = props

	return (
		<div className='desktop__schedule__box'>
			<h2 className='desktop__schedule__day'>{day}</h2>
			<p className='desktop__schedule__meal'>{breakfast}</p>
			<p className='desktop__schedule__meal'>{secondBreakfast}</p>
			<p className='desktop__schedule__meal'>{soup}</p>
			<p className='desktop__schedule__meal'>{dinner}</p>
			<p className='desktop__schedule__meal'>{supper}</p>
		</div>
	)
}