import React, {useEffect, useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import Container from "react-bootstrap/Container";
import {ApplicationScheduleDescription} from "./ApplicationScheduleDescription";
import {ApplicationScheduleWeekNumber} from "./ApplicationScheduleWeekNumber";
import {ApplicationScheduleWeek} from "./ApplicationScheduleWeek";
import * as firebase from "firebase";
import {ApplicationScheduleList} from "./ApplicationScheduleList";


export const ApplicationSchedule = () => {

	const [newScheduleTitle, setNewScheduleTitle] = useState('')
	const [newScheduleDescription, setNewScheduleDescription] = useState('')
	const [newScheduleWeekNumber, setNewScheduleWeekNumber] = useState(1)
	const [moveToAddNewSchedule,setMoveToAddNewSchedule] = useState(false)
	const [scheduleId,setScheduleId] = useState('')
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


	// here we set at the begin first recipe from users recipes list in case that user won't set anything we need to have some value
	// coz only on change we the user choose some thing it will save in monday,tuesday etc.
	useEffect(() => {
		let db = firebase.firestore()
		let user = firebase.auth().currentUser
		db.collection('users').doc(user.uid).collection('recipes').onSnapshot(snapshot => {

			let changes = snapshot.docChanges()
			let newArray = changes.map(change => {
				let dataToSeT = change.doc.data()
				dataToSeT.id = change.doc.id
				return dataToSeT

			})
			setMonday({
				breakfast: newArray[0].title,
				secondBreakfast: newArray[0].title,
				soup: newArray[0].title,
				dinner: newArray[0].title,
				supper: newArray[0].title
			})
			setTuesday({
				breakfast: newArray[0].title,
				secondBreakfast: newArray[0].title,
				soup: newArray[0].title,
				dinner: newArray[0].title,
				supper: newArray[0].title
			})
			setWednesday({
				breakfast: newArray[0].title,
				secondBreakfast: newArray[0].title,
				soup: newArray[0].title,
				dinner: newArray[0].title,
				supper: newArray[0].title
			})
			setThursday({
				breakfast: newArray[0].title,
				secondBreakfast: newArray[0].title,
				soup: newArray[0].title,
				dinner: newArray[0].title,
				supper: newArray[0].title
			})
			setFriday({
				breakfast: newArray[0].title,
				secondBreakfast: newArray[0].title,
				soup: newArray[0].title,
				dinner: newArray[0].title,
				supper: newArray[0].title
			})
			setSaturday({
				breakfast: newArray[0].title,
				secondBreakfast: newArray[0].title,
				soup: newArray[0].title,
				dinner: newArray[0].title,
				supper: newArray[0].title
			})
			setSunday({
				breakfast: newArray[0].title,
				secondBreakfast: newArray[0].title,
				soup: newArray[0].title,
				dinner: newArray[0].title,
				supper: newArray[0].title
			})

			})
		},[])



	const handleAddNewSchedule = (e,scheduleWeekNumber) => {
		let db = firebase.firestore()
		let user = firebase.auth().currentUser

		e.preventDefault()
		if (newScheduleDescription.length === 0) {
			setNewScheduleDescriptionError(true)
		}
		if (newScheduleTitle.length === 0) {
			setNewScheduleTitleError(true)
		}
		if (typeof scheduleWeekNumber.length === 'undefined') {
			setNewScheduleWeekNumberError(true)
		}
		if (scheduleWeekNumber.length > 0 && newScheduleWeekNumberError === false && newScheduleTitleError === false && newScheduleTitle.length > 0 && newScheduleDescriptionError === false && newScheduleDescription.length > 0) {
			setNewScheduleDescriptionError(false)
			setNewScheduleTitleError(false)
			setNewScheduleWeekNumberError(false)
			let dataToSent = {
				id: scheduleId,
				title: newScheduleTitle,
				description: newScheduleDescription,
				weekNumber: newScheduleWeekNumber,
				monday: monday,
				tuesday: tuesday,
				wednesday: wednesday,
				thursday: thursday,
				friday: friday,
				saturday: saturday,
				sunday: sunday
			}
			console.log(dataToSent)
			db.collection('users').doc(user.uid).collection('schedules').add(dataToSent).then(data => {
				setMoveToAddNewSchedule(false)
				setNewScheduleTitle('')
				setNewScheduleDescription('')
				setNewScheduleWeekNumber('')
			})
		}
	}

	const [newSchedule, setNewSchedule] = useState({
		id: '',
		monday: monday,
		tuesday: tuesday,
		wednesday: wednesday,
		thursday: thursday,
		friday: friday,
		saturday: saturday,
		sunday: sunday
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

		if (value.length === 0 || value.length > 150) {
			setNewScheduleDescription(value)
			setNewScheduleDescriptionError(true)
		} else {
			setNewScheduleDescription(value)
			setNewScheduleDescriptionError(false)
		}
	}

	const handleScheduleTitleValidation = (e) => {
		const {value} = e.target

		if (value.length === 0 || value.length > 50) {
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

		if (parseInt(value) <= 0 || parseInt(value) > 51 || value.length === 0 || !checkNumber(value)) {
			setNewScheduleWeekNumber(value)
			setNewScheduleWeekNumberError(true)
		} else {
			setNewScheduleWeekNumber(value)
			setNewScheduleWeekNumberError(false)
		}
	}

	const handleMoveToAddNewSchedule = () => {
		setMoveToAddNewSchedule(true)
	}

	const handleEditSchedule = (e,idOfRecipe,userId) => {
		e.preventDefault();
		let db = firebase.firestore()
		let user = firebase.auth().currentUser
		console.log('work')

		db.collection('users').doc(userId).collection('schedules').doc(idOfRecipe).get()
			.then(data => {
				let dataToDisplay = data.data()
				dataToDisplay.id = data.id;

				setNewScheduleTitle(dataToDisplay.title)
				setNewScheduleDescription(dataToDisplay.description)
				setNewScheduleWeekNumber(dataToDisplay.weekNumber)
				setScheduleId(dataToDisplay.id)
				setMonday(dataToDisplay.monday)
				setTuesday(dataToDisplay.tuesday)
				setWednesday(dataToDisplay.wednesday)
				setThursday(dataToDisplay.thursday)
				setFriday(dataToDisplay.friday)
				setSaturday(dataToDisplay.saturday)
				setSunday(dataToDisplay.sunday)
				setMoveToAddNewSchedule(true)
				setNewOrEdit('edit')
			})
			.catch(e => console.log(e))
	}

	const handleSaveEditedSchedule = (e,scheduleWeekNumber,elementId) => {
		let db = firebase.firestore()
		let user = firebase.auth().currentUser



		e.preventDefault()
		if (newScheduleDescription.length === 0) {
			setNewScheduleDescriptionError(true)
		}
		if (newScheduleTitle.length === 0) {
			setNewScheduleTitleError(true)
		}
		if (typeof scheduleWeekNumber.length === 'undefined') {
			setNewScheduleWeekNumberError(true)
		}
		if (scheduleWeekNumber.length > 0 && newScheduleWeekNumberError === false && newScheduleTitleError === false && newScheduleTitle.length > 0 && newScheduleDescriptionError === false && newScheduleDescription.length > 0) {
			setNewScheduleDescriptionError(false)
			setNewScheduleTitleError(false)
			setNewScheduleWeekNumberError(false)
			let dataToSent = {
				id: scheduleId,
				title: newScheduleTitle,
				description: newScheduleDescription,
				weekNumber: newScheduleWeekNumber,
				monday: monday,
				tuesday: tuesday,
				wednesday: wednesday,
				thursday: thursday,
				friday: friday,
				saturday: saturday,
				sunday: sunday
			}
			console.log(elementId)

			db.collection('users').doc(user.uid).collection('schedules').doc(elementId).set(dataToSent).then(data => {
				setNewOrEdit('new')
				setMoveToAddNewSchedule(false)


			})
		}
	}


	const [newOrEdit,setNewOrEdit] = useState('new')

	return (
		<ApplicationTemplate>
			<section className='schedule'>
				{moveToAddNewSchedule === true && <Container fluid className='pr-4 pl-4 pr-md-5 pl-md-5 h-100'>
					<ApplicationScheduleDescription id={scheduleId} handleSaveEditedSchedule={handleSaveEditedSchedule}  newOrEdit={newOrEdit} weekNumberValue={newScheduleWeekNumber} addNewSchedule={handleAddNewSchedule}
					                                descriptionValue={newScheduleDescription} titleValue={newScheduleTitle}
					                                titleError={newScheduleTitleError}
					                                descriptionError={newScheduleDescriptionError}
					                                setTitle={handleScheduleTitleValidation}
					                                setDescription={handleScheduleDescriptionValidation}/>
					<ApplicationScheduleWeekNumber setWeekNumber={handleScheduleWeekNumberValidation}
					                               weekNumberError={newScheduleWeekNumberError}
					                               weekNumberValue={newScheduleWeekNumber}/>
					<ApplicationScheduleWeek sunday={sunday} saturday={saturday} friday={friday} thursday={thursday}
					                         wednesday={wednesday} tuesday={tuesday} monday={monday} setMonday={handleSetMonday}
					                         setTuesday={handleSetTuesday}
					                         setWednesday={handleSetWednesday} setThursday={handleSetThursday}
					                         setFriday={handleSetFriday} setSaturday={handleSetSaturday}
					                         setSunday={handleSetSunday}/>
				</Container>}
				{moveToAddNewSchedule === false && <ApplicationScheduleList editExistingSchedule={handleEditSchedule} moveToAddNewScheduleSection={handleMoveToAddNewSchedule}/>}
			</section>
		</ApplicationTemplate>
	)
}