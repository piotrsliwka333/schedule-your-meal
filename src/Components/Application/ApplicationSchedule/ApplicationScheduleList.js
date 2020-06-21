import React, {useEffect, useState} from "react";
import {ApplicationListElement} from "../ApplicationList/ApplicationListElement";
import {ApplicationListElements} from "../ApplicationList/ApplicationListElements";
import {ApplicationListDescription} from "../ApplicationList/ApplicationListDescription";
import {ApplicationListHeader} from "../ApplicationList/ApplicationListHeader";
import {Container} from "react-bootstrap";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const ApplicationScheduleList = (props) => {
	const {moveToAddNewScheduleSection, editExistingSchedule} = props
	const [recipes, setRecipes] = useState([])
	const [userUid, setUserUid] = useState('')
	const [deleted, setDeleted] = useState(false);
	// when we press delete button it need to load fresh data so after every click it will change on a different value
	let db = firebase.firestore()

	useEffect(() => {
		let user = firebase.auth().currentUser
		setUserUid(user.uid)

		//real time event listener from firestore
		db.collection('users').doc(user.uid).collection('schedules').onSnapshot(snapshot => {
			let changes = snapshot.docChanges()
			setRecipes(changes.map(change => {
				let dataToSeT = change.doc.data()
				dataToSeT.id = change.doc.id
				return dataToSeT
			}))
		})
	}, [deleted])

	const handleDeleteElement = (e, idToDelete, userId) => {
		e.preventDefault()
		db.collection('users').doc(userId).collection('schedules').doc(idToDelete).delete().then(data => {
			setDeleted(!deleted)
		});
	}

	if (!recipes) return <h1>data loading</h1>
	return (
		<Container fluid className='pr4 pl-4 h-100'>
			<ApplicationListHeader moveToAddNewRecipeSection={moveToAddNewScheduleSection} title='LISTA PLANÓW'/>
			<ApplicationListDescription/>
			<ApplicationListElements>
				{recipes.map(element => <ApplicationListElement editElement={editExistingSchedule} userUid={userUid}
				                                                elementToEditOrDelete={element.id}
				                                                deleteElement={handleDeleteElement} key={element.id}
				                                                name={element.title} description={element.description}/>)}
			</ApplicationListElements>
		</Container>
	)
}