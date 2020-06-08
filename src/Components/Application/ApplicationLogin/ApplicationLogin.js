import React, {useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import * as firebase from "firebase";
import {ApplicationRecipes} from "../ApplicationRecipes/ApplicationRecipes";
import {ApplicationLoginForm} from "./ApplicationLoginForm";
import {ApplicationRegisterForm} from "./ApplicationRegisterForm";

export const ApplicationLogin = (props) => {
	const db = firebase.firestore()
	const auth = firebase.auth()

	const [registerOrLogin, setRegisterOrLogin] = useState(true)


	const signInWithGoogle = (e) => {
		e.preventDefault();
		let base_provider = new firebase.auth.GoogleAuthProvider()
		firebase.auth().signInWithPopup(base_provider)
			.then(cred => db.collection('users').doc(cred.user.uid))
			.catch(err => console.log(err))
	}


	const handleChangeOnLoginOrRegister = (e) => {
		e.preventDefault();
		setRegisterOrLogin(!registerOrLogin)
	}

	//by click in sign in with google we can login or register so we don't have create another file for it

	return (
		<ApplicationTemplate>
			<section className='login'>
				<h1 className='login__greeting'>Witaj,</h1>
				<p
					className='login__text'>{registerOrLogin ? 'Podaj email i hasło' : 'Podaj email i hasło'}<br/> {registerOrLogin ? 'żeby się zalogować' : 'żeby założyć konto'}
				</p>
				{registerOrLogin ? <ApplicationLoginForm/> : <ApplicationRegisterForm/>}
				<button onClick={e => handleChangeOnLoginOrRegister(e)}
				        className='switch-button home-button'>{registerOrLogin ? 'zarejestruj się' : 'zaloguj się'}</button>
				<div className='google-btn' onClick={e => signInWithGoogle(e)}>
					<div className="google-icon-wrapper">
						<img className="google-icon"
						     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
					</div>
					<p className="btn-text"><b>Sign in with google</b></p>
				</div>
			</section>
		</ApplicationTemplate>
	)
}


// <p className='login__text'>
// 	Wygląda na to że jesteś tutaj <br/> pierwszy raz!
// </p>
// <form onSubmit={e => handleSaveName(e)} className='login-form'>
// 	<input type='text' value={newUserName} onChange={e => setNewUserName(e.target.value)}/>
// 	<input type='password' value={newUserPassword} onChange={e => setNewUserPassword(e.target.value)}/>
// 	<button onClick={e => loginIn(e)}> sign in</button>
// 	<input type='text' value={name} onChange={e => setName(e.target.value)}
// 	       className={nameError ? 'login-form__input error' : 'login-form__input'}
// 	       placeholder='tutaj wpisz jak masz na imię'/>
// 	{nameError && <p className='error-message'>imię jest obowiązkowe</p>}
// 	<button type='submit' className='home-button login-form__button'>Gotowe!</button>
// </form>
// <button onClick={e => signInWithGoogle(e)}>Sign in with google</button>
// <p className='login__information'>
// 	Podaj nam swoje imię, a my zorganizujemy <br/> dla Ciebie Naszą aplikację :)
// </p>