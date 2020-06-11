import React, {useEffect, useState} from "react";
import {ApplicationScheduleKindOfDish} from "./ApplicationScheduleWeekKindOfDish";
import {ApplicationScheduleWeekElements} from "./ApplicationScheduleWeekElements";
import {ApplicationScheduleWeekElement} from "./ApplicationScheduleWeekElement";
import * as firebase from "firebase";

export const ApplicationScheduleWeek = (props) => {
	const {setMonday,setTuesday,setWednesday,setThursday,setFriday,setSaturday,setSunday} = props

	const [recipes,setRecipes] = useState([])

	let db = firebase.firestore()
	let user = firebase.auth().currentUser
	// setting recipes from firestore
	useEffect(() => {
		db.collection('users').doc(user.uid).collection('recipes').get().then(data => {
			let newArray = [];
			data.forEach(element => newArray.push(element.data().title))
			setRecipes(newArray)
		}).catch(e => console.log(e))
	},[])
	return (
		<div className='week'>
			<ApplicationScheduleKindOfDish/>
			<ApplicationScheduleWeekElements>
				<ApplicationScheduleWeekElement recipesArray={recipes} setDay={setMonday} day={'poniedziałek'}/>
				<ApplicationScheduleWeekElement recipesArray={recipes} setDay={setTuesday} day={'wtorek'}/>
				<ApplicationScheduleWeekElement recipesArray={recipes} setDay={setWednesday} day={'środa'}/>
				<ApplicationScheduleWeekElement recipesArray={recipes} setDay={setThursday} day={'czwartek'}/>
				<ApplicationScheduleWeekElement recipesArray={recipes} setDay={setFriday} day={'piątek'}/>
				<ApplicationScheduleWeekElement recipesArray={recipes} setDay={setSaturday} day={'sobota'}/>
				<ApplicationScheduleWeekElement recipesArray={recipes} setDay={setSunday} day={'niedziela'}/>
			</ApplicationScheduleWeekElements>
		</div>
	)
}