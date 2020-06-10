import React, {useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import Container from "react-bootstrap/Container";
import {ApplicationScheduleDescription} from "./ApplicationScheduleDescription";
import {ApplicationScheduleWeekNumber} from "./ApplicationScheduleWeekNumber";
import {ApplicationScheduleWeek} from "./ApplicationScheduleWeek";


export const ApplicationSchedule = () => {

	const [newScheduleTitle,setNewScheduleTitle] = useState('')
	const [newScheduleDescription,setNewScheduleDescription] = useState('')
	const [newScheduleWeekNumber,setNewScheduleWeekNumber] = useState(1)
	const [newSchedule,setNewSchedule] = useState({
		id:'',
		monday: {
			breakfast: '',
			secondBreakfast: '',
			soup: '',
			dinner: '',
			supper: ''
		},
		tuesday: {
			breakfast: '',
			secondBreakfast: '',
			soup: '',
			dinner: '',
			supper: ''
		},
		wednesday: {
			breakfast: '',
			secondBreakfast: '',
			soup: '',
			dinner: '',
			supper: ''
		},
		thursday: {
			breakfast: '',
			secondBreakfast: '',
			soup: '',
			dinner: '',
			supper: ''
		},
		friday: {
			breakfast: '',
			secondBreakfast: '',
			soup: '',
			dinner: '',
			supper: ''
		},
		saturday: {
			breakfast: '',
			secondBreakfast: '',
			soup: '',
			dinner: '',
			supper: ''
		},
		sunday: {
			breakfast: '',
			secondBreakfast: '',
			soup: '',
			dinner: '',
			supper: ''
		}
	})

	//Error
	const [newScheduleTitleError, setNewRecipeTitleError] = useState(false)
	const [newScheduleDescriptionError, setNewRecipeDescriptionError] = useState(false)
	const [newScheduleWeekError,setNewScheduleWeekError] = useState(false)
	const [newScheduleRecipesError,setScheduleRecipes] = useState(false)
	// if don't have any recipes will not be able to set a schedule


	return(
		<ApplicationTemplate>
			<section className='schedule'>
				<Container fluid className='pr-4 pl-4 pr-md-5 pl-md-5 h-100'>
						<ApplicationScheduleDescription/>
						<ApplicationScheduleWeekNumber/>
						<ApplicationScheduleWeek/>
				</Container>
			</section>
		</ApplicationTemplate>
	)
}