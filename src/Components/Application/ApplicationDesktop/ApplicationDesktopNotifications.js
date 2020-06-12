import React, {useEffect, useState} from "react";
import {Col} from "react-bootstrap";
import {ApplicationDesktopNotification} from "./ApplicationDesktopNotification";
import * as firebase from "firebase";

export const ApplicationDesktopNotifications = () => {
	const [notification,setNotification] = useState({info:true,warning:true,cheering:true})
	const [recipes,setRecipes] = useState('')
	const handleHideNotification = (e) => {
		e.preventDefault();
		const {name} = e.target
		setNotification(prevState => {
			return({
				...prevState,
				[name]: false
			})
		})
	}

	const checkHowManyRecipes = (array) => {
		console.log(array.length === 1)
		switch (array.length) {
			case 0:
				setRecipes(`masz ${array.length} przepisów, dodaj jakiś :)`)
				break;
			case 1:
				setRecipes(`masz już ${array.length} przepis, dodaj jeszcze`)
				break;
			case 2: case 3: case 4:
				setRecipes(`masz już ${array.length} przepisy, nieźle`)
				break;
			default:
				setRecipes(`masz już ${array.length} przepisów, nieźle`)
				break;
		}
	}
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
			checkHowManyRecipes(newArray)
		})

	}, [])

	return (
		<Col className='col-12 col-md-7 col-xl-7 desktop__notifications-wrapper'>
			{notification.info && <ApplicationDesktopNotification display={handleHideNotification} name='info'
			 extraClass='info'	icon="fas fa-info-circle" text={recipes}/>}
			{notification.warning && <ApplicationDesktopNotification display={handleHideNotification} name='warning'
				extraClass='warning' icon="fas fa-exclamation-circle" text='Pamiętaj aby dodać przepis'/>}
			{notification.cheering && <ApplicationDesktopNotification display={handleHideNotification} name='cheering'
				extraClass='cheering' icon='fas fa-check-circle' text='Świetnie że jesteś! Udanego planowania i smacznego :)'/>}
		</Col>
	)
}