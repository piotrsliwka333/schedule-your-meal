import React, {useState} from "react";
import {ApplicationScheduleWeekElements} from "./ApplicationScheduleWeekElements";

export const ApplicationScheduleWeekElement = (props) => {
	const {day} = props
	let recipesArray = ['befsztyk po karpacku', 'szpagetti', 'rozmaryn'];
	let dishArray = ['breakfast', 'secondBreakfast', 'soup', 'dinner', 'supper']


	return (
		<div className='week__element-box col-md-6 col-xl-12'>
			<p className='week__element__name'>{day}</p>
			<div className='selects-box'>
				{dishArray.map((dish,index) => <ApplicationScheduleWeekElementSelect dish={dish} key={index} name={dish} recipesArray={recipesArray}/>)}
			</div>
		</div>
	)
}


const ApplicationScheduleWeekElementSelect = (props) => {
	const {recipesArray, name,dish} = props
	const [recipe, setRecipe] = useState('')

	const handleRecipeChange = (e) => {
		const {value} = e.target
		setRecipe(value)
	}

	return (
		<>
			<select className='week__element__select' value={recipe} name={name} onChange={e => handleRecipeChange(e)}>
				{recipesArray.map((recipe,index) => <option key={index} value={recipe}>{recipe}</option>)}
			</select>
			<p className='week__element__select__dish-helper'>{dish}</p>
		</>
	)
}