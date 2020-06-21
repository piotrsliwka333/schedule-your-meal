import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import {ApplicationShoppingListElement} from "./ApplicationShoppingListElement";

export const ApplicationShoppingListElements = () => {
	const [products,setProducts] = useState([])
	let db = firebase.firestore()
	let user = firebase.auth().currentUser
	useEffect(() => {
		db.collection('users').doc(user.uid).collection('products').onSnapshot(snapshot => {
			let changes = snapshot.docChanges()
			setProducts(changes.map(change => {
				let dataToSeT = change.doc.data()
				dataToSeT.id = change.doc.id
				return dataToSeT
			}))
		})
	},[])
	return (
		<div className='shopping-list__elements'>
			{products.map(element => <ApplicationShoppingListElement key={element.id} name={element.name}/>)}
		</div>
	)
}