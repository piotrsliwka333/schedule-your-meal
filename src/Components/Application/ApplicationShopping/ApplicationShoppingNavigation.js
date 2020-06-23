import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import {ApplicationShoppingNavigationElement} from "./ApplicationShoppingNavigationElement";

export const ApplicationShoppingNavigation = (props) => {
	const {showOrHide} = props
	const [recipes, setRecipes] = useState([])
	const [currentRecipe, setCurrentRecipe] = useState('wait')
	const [ingredients, setIngredients] = useState([])
	let db = firebase.firestore()
	let user = firebase.auth().currentUser


	useEffect(() => {
		db.collection('users').doc(user.uid).collection('recipes').onSnapshot(snapshot => {
			let changes = snapshot.docChanges();
			changes.forEach(change => {
				if (change.type == 'added') {
					let dataToSet = change.doc.data()
					dataToSet.id = change.doc.id
					setCurrentRecipe(dataToSet.id)
					setRecipes(prevState => [...prevState, dataToSet])
				}
			})
		})
	}, [])

	useEffect(() => {
		if (currentRecipe !== 'wait') {
			db.collection('users').doc(user.uid).collection('recipes').doc(currentRecipe).get().then(data => {
				let ingredientsArray = [];
				setIngredients(data.data().ingredients)
			})
		}
	}, [currentRecipe])

	const addIngredientToList = (e, name) => {
		db.collection('users').doc(user.uid).collection('products').add({
			id: '',
			name: name,
			done: false
		}).then()
	}

	return (
		<nav className={showOrHide ? 'shopping-navigation' : 'shopping-navigation hide'}>
			<div className='nav-option'>
				<h2 className='nav-option__title'>Wybierz swój przepis</h2>
				<select value={currentRecipe} onChange={e => setCurrentRecipe(e.target.value)} className='nav-option__select'>
					{recipes.map(element => <option key={element.id} value={element.id}
					                                className='nav-option__option'>{element.title}</option>)}
				</select>
				<h3 className='nav-ingredients__title'>Składniki przepisu</h3>
				<div className='ingredients-box'>
					{ingredients.map(element => <ApplicationShoppingNavigationElement key={element.id}
					                                                                  addToList={addIngredientToList}
					                                                                  name={element.name}/>)}
				</div>
			</div>
		</nav>
	)
}