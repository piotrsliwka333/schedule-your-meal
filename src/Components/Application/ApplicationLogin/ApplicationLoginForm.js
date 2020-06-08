import React, {useState} from "react";
import * as firebase from "firebase";

export const ApplicationLoginForm = () => {
	const auth = firebase.auth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginError, setLoginError] = useState(false)


	const loginWithEmailAndPassword = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password).then(cred => {
			setLoginError(false)
		}).catch(e => {
			setLoginError(true)
		})
	}

	return (
		<>
			<form onSubmit={e => loginWithEmailAndPassword(e)} className='login-form'>
				<label htmlFor='email-login' className='login-form__label'>Login</label>
				<input id='email-login' type='email' className={loginError ? 'login-form__input error' : 'login-form__input'} value={email} placeholder='Podaj swój email'
				       onChange={e => setEmail(e.target.value)}/>
				<label htmlFor='password-login' className='login-form__label'>Hasło</label>
				<input id='password-login' type='password' className={loginError ? 'login-form__input error' : 'login-form__input'} value={password} placeholder='Podaj swoje hasło'
				       onChange={e => setPassword(e.target.value)}/>
				{loginError && <p className='error-message'>Niepoprawny login lub hasło</p>}
				<button type='submit' className='login-form__button'>Zaloguj</button>
			</form>
		</>
	)
}