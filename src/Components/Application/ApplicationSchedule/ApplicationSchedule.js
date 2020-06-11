import React, {useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import Container from "react-bootstrap/Container";
import {ApplicationScheduleDescription} from "./ApplicationScheduleDescription";
import {ApplicationScheduleWeekNumber} from "./ApplicationScheduleWeekNumber";
import {ApplicationScheduleWeek} from "./ApplicationScheduleWeek";


export const ApplicationSchedule = () => {

	const [newScheduleTitle, setNewScheduleTitle] = useState('')
	const [newScheduleDescription, setNewScheduleDescription] = useState('')
	const [newScheduleWeekNumber, setNewScheduleWeekNumber] = useState(1)
	const [monday, setMonday] = useState({
		breakfast: '',
		secondBreakfast: '',
		soup: '',
		dinner: '',
		supper: ''
	})
	const [tuesday, setTuesday] = useState({
		breakfast: '',
		secondBreakfast: '',
		soup: '',
		dinner: '',
		supper: ''
	})
	const [wednesday, setWednesday] = useState({
		breakfast: '',
		secondBreakfast: '',
		soup: '',
		dinner: '',
		supper: ''
	})
	const [thursday, setThursday] = useState({
		breakfast: '',
		secondBreakfast: '',
		soup: '',
		dinner: '',
		supper: ''
	})
	const [friday, setFriday] = useState({
		breakfast: '',
		secondBreakfast: '',
		soup: '',
		dinner: '',
		supper: ''
	})
	const [saturday, setSaturday] = useState({
		breakfast: '',
		secondBreakfast: '',
		soup: '',
		dinner: '',
		supper: ''
	})
	const [sunday, setSunday] = useState({
		breakfast: '',
		secondBreakfast: '',
		soup: '',
		dinner: '',
		supper: ''
	})

	const [newSchedule, setNewSchedule] = useState({
		id: '',
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
	const [newScheduleTitleError, setNewScheduleTitleError] = useState(false)
	const [newScheduleDescriptionError, setNewScheduleDescriptionError] = useState(false)
	const [newScheduleWeekNumberError, setNewScheduleWeekNumberError] = useState(false)
	const [newScheduleRecipesError, setScheduleRecipes] = useState(false)
	// if don't have any recipes will not be able to set a schedule

	//set monday

	const handleSetMonday = (e) => {
		e.preventDefault()
		const {value, name} = e.target
		setMonday(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}
	// set tuesday
	const handleSetTuesday = (e) => {
		e.preventDefault()
		const {value, name} = e.target
		setTuesday(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}
	// set wednesday
	const handleSetWednesday = (e) => {
		e.preventDefault()
		const {value, name} = e.target
		setWednesday(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}
	//set thursday
	const handleSetThursday = (e) => {
		e.preventDefault()
		const {value, name} = e.target
		setThursday(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}
	//set Friday
	const handleSetFriday = (e) => {
		e.preventDefault()
		const {value, name} = e.target
		setFriday(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}
	//set Saturday
	const handleSetSaturday = (e) => {
		e.preventDefault()
		const {value, name} = e.target
		setSaturday(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}
	//set Sunday
	const handleSetSunday = (e) => {
		e.preventDefault()
		const {value, name} = e.target
		setSunday(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}

	//set Schedule Description
	const handleScheduleDescriptionValidation = (e) => {
		const {value} = e.target

		if(value.length === 0 || value.length > 150) {
			setNewScheduleDescription(value)
			setNewScheduleDescriptionError(true)
		} else {
			setNewScheduleDescription(value)
			setNewScheduleDescriptionError(false)
		}
	}

	const handleScheduleTitleValidation = (e) => {
		const {value} = e.target

		if(value.length === 0 || value.length > 50) {
			setNewScheduleTitle(value)
			setNewScheduleTitleError(true)
		} else {
			setNewScheduleTitle(value)
			setNewScheduleTitleError(false)
		}
	}

	//set week number
	const handleScheduleWeekNumberValidation = (e) => {
		const {value} = e.target
		const checkNumber = (value) => {
			let regex = /^[1-9]\d*$/
			return regex.test(value)
		}
		console.log(checkNumber(value))

		if(parseInt(value) <= 0 || parseInt(value) > 51 || value.length === 0 || !checkNumber(value)) {
			setNewScheduleWeekNumber(value)
			setNewScheduleWeekNumberError(true)
		} else {
			setNewScheduleWeekNumber(value)
			setNewScheduleWeekNumberError(false)
		}
	}



	return (
		<ApplicationTemplate>
			<section className='schedule'>
				<Container fluid className='pr-4 pl-4 pr-md-5 pl-md-5 h-100'>
					<ApplicationScheduleDescription descriptionValue={newScheduleDescription} titleValue={newScheduleTitle} titleError={newScheduleTitleError} descriptionError={newScheduleDescriptionError} setTitle={handleScheduleTitleValidation} setDescription={handleScheduleDescriptionValidation}/>
					<ApplicationScheduleWeekNumber setWeekNumber={handleScheduleWeekNumberValidation} weekNumberError={newScheduleWeekNumberError} weekNumberValue={setNewScheduleWeekNumber} />
					<ApplicationScheduleWeek setMonday={handleSetMonday} setTuesday={handleSetTuesday}
					                         setWednesday={handleSetWednesday} setThursday={handleSetThursday}
																	 setFriday={handleSetFriday} setSaturday={handleSetSaturday} setSunday={handleSetSunday}/>
				</Container>
			</section>
		</ApplicationTemplate>
	)
}