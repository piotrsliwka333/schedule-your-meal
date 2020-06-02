import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Application} from "./Components/Application/Application";

export const App = () => {

	return(
		<BrowserRouter>
			<>
				<Route exact path={'/'} component={Home}/>
				<Route path={'/application'} component={Application}/>
			</>
		</BrowserRouter>
	)
}