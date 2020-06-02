import React, {useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";

export const ApplicationLogin = () => {
	const [name, setName] = useState('')
	const [nameError, setNameError] = useState(false)

	const handleSaveName = (e) => {
		e.preventDefault();
		if (name.length > 0) {
			localStorage.setItem('name', name)
			setNameError(false)
			setName('')
		} else {
			setNameError(true)
		}
	}

	return (
		<ApplicationTemplate>
			<section className='login'>
				<h1 className='login__greeting'>Witaj,</h1>
				<p className='login__text'>
					Wygląda na to że jesteś tutaj <br/> pierwszy raz!
				</p>
				<form onSubmit={e => handleSaveName(e)} className='login-form'>
					<input type='text' value={name} onChange={e => setName(e.target.value)}
					       className={nameError ? 'login-form__input error' : 'login-form__input'}
					       placeholder='tutaj wpisz jak masz na imię'/>
					{nameError && <p className='error-message'>imię jest obowiązkowe</p>}
					<button type='submit' className='home-button login-form__button'>Gotowe!</button>
				</form>
				<p className='login__information'>
					Podaj nam swoje imię, a my zorganizujemy <br/> dla Ciebie Naszą aplikację :)
				</p>
			</section>
		</ApplicationTemplate>
	)
}