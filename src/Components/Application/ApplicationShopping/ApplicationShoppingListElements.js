import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import {ApplicationShoppingListElement} from "./ApplicationShoppingListElement";

export const ApplicationShoppingListElements = () => {
	const [products, setProducts] = useState([])
	const [btnInfo,setBtnInfo] = useState(false)
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
							element.done = change.doc.data().done
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

	const deleteAllCompleted = (e,products) => {
		e.preventDefault()
		console.log('work')
		products.forEach(element=> {
			if(element.done === true) {
				db.collection('users').doc(user.uid).collection('products').doc(element.id).delete().then().catch(e => console.log(e))
			}
		})

	}

	const showInfo = (e) => {
		e.preventDefault()
		setBtnInfo(true)
	}
	const hideInfo = (e) => {
		e.preventDefault()
		setBtnInfo(false)
	}
	return (
		<div className='shopping-list__elements'>
			<button onClick={e => deleteAllCompleted(e,products)} onMouseEnter={e => showInfo(e)} onMouseLeave={e => hideInfo(e)} className='delete-completed-btn'>
				<i className="fas fa-eraser"/>
			</button>
			{btnInfo && <p className='btn-info'>Usuń wszystkie skończone</p>}

			{products.map(element => <ApplicationShoppingListElement key={element.id} name={element.name} id={element.id}
			                                                         saveEditedProduct={saveEditedProduct}  deleteElement={deleteProduct}/>)}
		</div>
	)
}