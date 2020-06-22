import React, {useState} from "react"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {ApplicationLogin} from "./Components/Application/ApplicationLogin/ApplicationLogin";
import {ApplicationDesktop} from "./Components/Application/ApplicationDesktop/ApplicationDesktop";
import {ApplicationRecipes} from "./Components/Application/ApplicationRecipes/ApplicationRecipes";
import {ApplicationSchedule} from "./Components/Application/ApplicationSchedule/ApplicationSchedule";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import {ApplicationShopping} from "./Components/Application/ApplicationShopping/ApplicationShopping";

export const App = () => {
	const [logged, setLogged] = useState(false)

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			setLogged(true)
		} else {
			setLogged(false)
		}
	})

	return (
		<Router>
			<>
				<Route exact path={'/schedule-your-meal'} component={Home}/>
				<Route path={'/'} render={() => (
					!logged ? (<ApplicationLogin/>) : (<Redirect to='/schedule-your-meal/desktop'/>)
				)}/>
				<Route path={'/schedule-your-meal/desktop'} render={() => (
					logged ? (<ApplicationDesktop/>) : (<Redirect to='/'/>)
				)}/>
				<Route path={'/schedule-your-meal/recipes'} render={() => (
					logged ? (<ApplicationRecipes/>) : (<Redirect to='/'/>)
				)}/>
				<Route path={'/schedule-your-meal/schedule'} render={() => (
					logged ? (<ApplicationSchedule/>) : (<Redirect to='/'/>)
				)}/>
				<Route path={'/schedule-your-meal/shopping'} render={() => (
					logged ? (<ApplicationShopping/>) : (<Redirect to='/'/>)
				)}/>
			</>
		</Router>
	)
}