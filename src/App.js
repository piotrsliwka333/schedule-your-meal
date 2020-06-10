import React, {useEffect, useState} from "react"
import {BrowserRouter, Route,Redirect} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {ApplicationLogin} from "./Components/Application/ApplicationLogin/ApplicationLogin";
import {ApplicationDesktop} from "./Components/Application/ApplicationDesktop/ApplicationDesktop";
import {ApplicationRecipes} from "./Components/Application/ApplicationRecipes/ApplicationRecipes";
import {ApplicationSchedule} from "./Components/Application/ApplicationSchedule/ApplicationSchedule";
import * as firebase from "firebase";


export const App = () => {
	const [logged,setLogged] = useState(false)

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			setLogged(true)
		} else {
			setLogged(false)
		}
	})

	return(
		<BrowserRouter>
			<>
				<Route exact path={'/schedule-your-meal'} component={Home}/>
				<Route path={'/schedule-your-meal/application/login'} render={() => (
					!logged ? (<ApplicationLogin />) : (<Redirect to='/schedule-your-meal/application/schedule'/>)
				)}/>
				<Route path={'/schedule-your-meal/application/desktop'} render={() => (
					logged ? (<ApplicationDesktop/>) : (<Redirect to='/schedule-your-meal/application/login'/>)
				)}/>
				<Route path={'/schedule-your-meal/application/recipes'} render={() => (
					logged ? (<ApplicationRecipes/>) : (<Redirect to='/schedule-your-meal/application/login'/>)
				)}/>
				<Route path={'/schedule-your-meal/application/schedule'} render={() => (
					logged ? (<ApplicationSchedule/>) : (<Redirect to='/schedule-your-meal/application/login'/>)
				)}/>
			</>
		</BrowserRouter>
	)
}