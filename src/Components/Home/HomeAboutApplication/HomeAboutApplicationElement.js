import React from "react";
import {Col} from "react-bootstrap";

export const HomeAboutApplicationElement = (props) => {
	const {icon,title,text} = props

	return(
		<Col className='col-10 col-md-6 col-xl-3 about-application__content'>
			<a className='about-application__icon'>
				<i className={icon}/>
			</a>
			<h4 className='about-application__title'>{title}</h4>
			<p className='about-application__text'>{text}</p>
		</Col>
	)
}