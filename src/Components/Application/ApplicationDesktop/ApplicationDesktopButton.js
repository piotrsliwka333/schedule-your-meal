import React from "react";
import {Link} from "react-router-dom";

export const ApplicationDesktopButton = (props) => {
	const {name, direction} = props
	return (
		<div className="desktop__button-container">
			<Link className='desktop__button' to={direction}>
				<i className="far fa-plus-square"/>
			</Link>
			<p className='button-description'>{name}</p>
		</div>
	)
}