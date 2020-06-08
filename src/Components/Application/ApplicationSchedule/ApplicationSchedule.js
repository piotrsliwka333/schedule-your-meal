import React, {useEffect, useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import * as firebase from "firebase";


export const ApplicationSchedule = () => {
	const [speed,setSpeed] = useState([])
	let db = firebase.firestore()


	// useEffect(() => {
	// 	let root = firebase.database().ref().child('recipes');
	// 	root.on('value',snap => {
	// 		setSpeed(snap.val())
	// 		console.log(snap.val())
	// 	});
	// },[])

	// useEffect(() => {
	// 	let data =  db.collection('users').doc(user.uid).get().then(doc => console.log(doc))
	// 	console.log(data)
	// },[])

	useEffect(() => {
		let user = firebase.auth().currentUser
		if(user) {
			db.collection('users').doc(user.uid).collection('recipes').get().then(snapshot => {
				snapshot.docs.forEach(doc => setSpeed(prevState => [...prevState,doc.data()]))
			})
		}
		else {

		}
	},[])

	return(
		<ApplicationTemplate>
			<h1>asdsApplicationSchedule Speed {JSON.stringify(speed)}</h1>
		</ApplicationTemplate>
	)
}