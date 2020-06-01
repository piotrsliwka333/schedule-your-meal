import React from "react"
import {HomeTemplate} from "./Components/Templates/HomeTemplates";
import {BrowserRouter,Route} from "react-router-dom";
import {Home} from "./Components/Home/Home";

export const App = () => {

	return(
		<BrowserRouter>
			<>
				<Route path={'/'} component={Home}/>
			</>
		</BrowserRouter>
	)
}