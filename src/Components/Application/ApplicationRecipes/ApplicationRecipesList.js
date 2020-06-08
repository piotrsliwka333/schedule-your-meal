import React, {useEffect, useState} from "react";

import {ApplicationListElement} from "../ApplicationList/ApplicationListElement";
import {ApplicationListElements} from "../ApplicationList/ApplicationListElements";
import {ApplicationListDescription} from "../ApplicationList/ApplicationListDescription";
import {ApplicationListHeader} from "../ApplicationList/ApplicationListHeader";
import {Container} from "react-bootstrap";
import * as firebase from "firebase";


export const ApplicationRecipesList = (props) => {
	const {moveToAddNewRecipeSection} = props
	const [recipes,setRecipes] = useState([])
	let db = firebase.firestore()

	useEffect(() => {
		let user = firebase.auth().currentUser
		if(user) {
			db.collection('users').doc(user.uid).collection('recipes').get().then(snapshot => {
				snapshot.docs.forEach(doc => setRecipes(prevState => [...prevState,doc.data()]))
			})
		}
		else {

		}
	},[])

	return(
		<Container fluid className='pr4 pl-4 h-100'>
			<ApplicationListHeader moveToAddNewRecipeSection={moveToAddNewRecipeSection} title='LISTA PRZEPISÓW'/>
			<ApplicationListDescription/>
			<ApplicationListElements>
				{recipes.map(element => <ApplicationListElement name={element.title} description={element.description}/> )}
			</ApplicationListElements>
		</Container>
	)
}