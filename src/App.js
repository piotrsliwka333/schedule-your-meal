import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {ApplicationLogin} from "./Components/Application/ApplicationLogin/ApplicationLogin";

export const App = () => {

	return(
		<BrowserRouter>
			<>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/application/login'} component={ApplicationLogin}/>
			</>
		</BrowserRouter>
	)
}