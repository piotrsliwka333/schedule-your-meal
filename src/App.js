import React, {useEffect, useState} from "react"
import {BrowserRouter, Route,Redirect} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {ApplicationLogin} from "./Components/Application/ApplicationLogin/ApplicationLogin";
import {ApplicationDesktop} from "./Components/Application/ApplicationDesktop/ApplicationDesktop";
import {ApplicationRecipes} from "./Components/Application/ApplicationRecipes/ApplicationRecipes";
import {ApplicationSchedule} from "./Components/Application/ApplicationSchedule/ApplicationSchedule";


export const App = () => {
	const [logged,setLogged] = useState(false)

	useEffect(()=> {
		console.log( typeof localStorage.name === "undefined")
		if(localStorage.name !== undefined) {
			setLogged(true)
		} else {
			setLogged(false)
		}
	},[localStorage.name])

	const handleLoggedIn = (e) => {
		e.preventDefault();
		setLogged(true)
	}



	return(
		<BrowserRouter>
			<>
				{/*<Route exact path={'/'} component={Home}/>*/}
				{/*<Route path={'/application/login'} component={ApplicationLogin}/>*/}
				{/*<Route path={'/application/desktop'} component={ApplicationDesktop}/>*/}
				{/*<Route path={'/application/recipes'} component={ApplicationRecipes}/>*/}
				{/*<Route path={'/application/schedule'} component={ApplicationSchedule}/>*/}
				<Route exact path={'/'} component={Home}/>
				<Route path={'/application/login'} render={() => (
					!logged ? (<ApplicationLogin loginFn={handleLoggedIn}  />) : (<Redirect to='/application/desktop'/>)
				)}/>
				<Route path={'/application/desktop'} render={() => (
					logged ? (<ApplicationDesktop/>) : (<Redirect to='/application/login'/>)
				)}/>
				<Route path={'/application/recipes'} render={() => (
					logged ? (<ApplicationRecipes/>) : (<Redirect to='/application/login'/>)
				)}/>
				<Route path={'/application/schedule'} render={() => (
					logged ? (<ApplicationSchedule/>) : (<Redirect to='/application/login'/>)
				)}/>
			</>
		</BrowserRouter>
	)
}