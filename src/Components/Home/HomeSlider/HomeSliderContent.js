import React from "react";

export const HomeSliderContent = (props) => {
	const {title, text} = props

	return (
		<div className='slider__content col-8 col-md-10 col-xl-10'>
			<h1 className='slider__title'>{title}</h1>
			<p className='slider__text'>{text}</p>
		</div>
	)
}