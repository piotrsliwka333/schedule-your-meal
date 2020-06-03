import React from "react";
import {Link} from "react-router-dom";

export const ApplicationDesktopButton = (props) => {
	const {name} = props
	return(
		<div className="desktop__button-container">
			<Link className='desktop__button' to='/schedule-your-meal/application/schedule'>
				<i className="far fa-plus-square"/>
			</Link>
			<p className='button-description'>{name}</p>
		</div>
	)
}