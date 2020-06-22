import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

export const ApplicationShoppingListElement = (props) => {
	const {name, id, deleteElement, saveEditedProduct} = props
	const [nameOfProduct, setNameOfProduct] = useState(name)
	const [disabled, setDisabled] = useState(true)
	const [done, setDone] = useState(false)
	let db = firebase.firestore()
	let user = firebase.auth().currentUser

	useEffect(() => {
		setNameOfProduct(name)
	}, [name])

	const checkDeleteElement = (e, elementId) => {
		if (typeof deleteElement === 'function') {
			deleteElement(e, elementId);
		}
	}

	const editElement = (e) => {
		e.preventDefault()
		setDisabled(false)
	}

	const markAsDone = (e, elementId) => {
		e.preventDefault()
		setDone(!done)
		db.collection('users').doc(user.uid).collection('products').doc(elementId).update({
			done: !done
		}).then()
	}
	const checkSaveEditedProduct = (elementId, name) => {
		if (typeof saveEditedProduct === 'function') {
			saveEditedProduct(elementId, name)
			setDisabled(true)
		}
	}

	function keyPress(event, elementId, name) {
		if (event.key === 'Enter') {
			checkSaveEditedProduct(elementId, name)
		}
	}

	return (
		<div className={done ? 'element done' : 'element'}>
			<input disabled={disabled} onKeyPress={e => keyPress(e, id, nameOfProduct)}
			       onChange={e => setNameOfProduct(e.target.value)}
			       className={disabled ? done ? 'element__name done' : 'element__name' : 'element__name element__name-editable'} value={nameOfProduct}/>
			<div className='action-container'>
				<button disabled={done} onClick={e => editElement(e)} className='element-btn edit-btn'>
					<i className="far fa-edit"/>
				</button>
				<button onClick={e => checkDeleteElement(e, id)} className='element-btn delete-btn'>
					<i className="far fa-trash-alt"/>
				</button>
				<button onClick={e => markAsDone(e,id)} className='element-btn complete-btn'>
					<i className="far fa-check-circle"/>
				</button>
			</div>
		</div>
	)
}