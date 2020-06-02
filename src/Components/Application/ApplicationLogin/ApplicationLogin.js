import React from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";

export const ApplicationLogin = () => {

	return (
		<ApplicationTemplate>
			<section className='login'>
				<h1 className='login__greeting'>Witaj,</h1>
				<p className='login__text'>
					Wygląda na to że jesteś tutaj <br/> pierwszy raz!
				</p>
				<form className='login-form'>
					<input type='text' className='login-form__input' placeholder='tutaj wpisz jak masz na imię'/>
					<button type='submit' className='home-button login-form__button'>Gotowe!</button>
				</form>
				<p className='login__information'>
					Podaj nam swoje imię, a my zorganizujemy <br/> dla Ciebie Naszą aplikację :)
				</p>
			</section>
		</ApplicationTemplate>
	)
}