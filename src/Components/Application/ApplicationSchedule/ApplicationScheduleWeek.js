import React, {useEffect, useState} from "react";
import {ApplicationScheduleKindOfDish} from "./ApplicationScheduleWeekKindOfDish";
import {ApplicationScheduleWeekElements} from "./ApplicationScheduleWeekElements";
import {ApplicationScheduleWeekElement} from "./ApplicationScheduleWeekElement";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const ApplicationScheduleWeek = (props) => {
	const {sunday, saturday, friday, thursday, wednesday, tuesday, monday, setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday, setSunday} = props
	const [recipes, setRecipes] = useState([])
	const [downloadRecipesError, setDownloadRecipesError] = useState(false)
	let db = firebase.firestore()
	let user = firebase.auth().currentUser
	// setting recipes from firestore
	useEffect(() => {
		db.collection('users').doc(user.uid).collection('recipes').get().then(data => {
			let newArray = [];
			data.forEach(element => newArray.push(element.data().title))
			setRecipes(newArray)
		}).catch(e => {
			setDownloadRecipesError(true)
		})
	}, [])

	return (
		<div className='week'>
			<ApplicationScheduleKindOfDish/>
			<ApplicationScheduleWeekElements>
				<ApplicationScheduleWeekElement currentValue={monday} recipesArray={recipes} setDay={setMonday}
				                                day={'poniedziałek'}/>
				<ApplicationScheduleWeekElement currentValue={tuesday} recipesArray={recipes} setDay={setTuesday}
				                                day={'wtorek'}/>
				<ApplicationScheduleWeekElement currentValue={wednesday} recipesArray={recipes} setDay={setWednesday}
				                                day={'środa'}/>
				<ApplicationScheduleWeekElement currentValue={thursday} recipesArray={recipes} setDay={setThursday}
				                                day={'czwartek'}/>
				<ApplicationScheduleWeekElement currentValue={friday} recipesArray={recipes} setDay={setFriday} day={'piątek'}/>
				<ApplicationScheduleWeekElement currentValue={saturday} recipesArray={recipes} setDay={setSaturday}
				                                day={'sobota'}/>
				<ApplicationScheduleWeekElement currentValue={sunday} recipesArray={recipes} setDay={setSunday}
				                                day={'niedziela'}/>
			</ApplicationScheduleWeekElements>
		</div>
	)
}