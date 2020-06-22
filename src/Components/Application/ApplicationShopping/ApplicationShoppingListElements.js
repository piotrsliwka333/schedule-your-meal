import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import {ApplicationShoppingListElement} from "./ApplicationShoppingListElement";

export const ApplicationShoppingListElements = () => {
	const [products, setProducts] = useState([])
	let db = firebase.firestore()
	let user = firebase.auth().currentUser
	useEffect(() => {
		db.collection('users').doc(user.uid).collection('products').onSnapshot(snapshot => {
			let changes = snapshot.docChanges();
			changes.forEach(change => {
				console.log(change.type);
				if (change.type == 'added') {
					let dataToSet = change.doc.data()
					dataToSet.id = change.doc.id
					setProducts(prevState => [...prevState, dataToSet])
				} else if (change.type == 'removed') {
					setProducts(prevState => prevState.filter(element => element.id !== change.doc.id))
				} if (change.type == 'modified') {

					setProducts(prevState => prevState.map(element => {
						if(element.id !== change.doc.id) {
							return element
						} else {
							element.name = change.doc.data().name
							return element
						}
					}))
				}
			})
		})
	}, [])

	//delete product
	const deleteProduct = (e, elementId) => {
		e.preventDefault();
		db.collection('users').doc(user.uid).collection('products').doc(elementId).delete().then().catch(e => console.log(e))
	}



	//saveEditedProduct
	const saveEditedProduct = (elementId,name) => {
		db.collection('users').doc(user.uid).collection('products').doc(elementId).set({
			name: name,
			id: elementId
		}).then()
	}

	return (
		<div className='shopping-list__elements'>
			{products.map(element => <ApplicationShoppingListElement key={element.id} name={element.name} id={element.id}
			                                                         saveEditedProduct={saveEditedProduct}  deleteElement={deleteProduct}/>)}
		</div>
	)
}