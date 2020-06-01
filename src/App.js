import React from "react"
import {HomeTemplate} from "./Components/Templates/HomeTemplates";
import {BrowserRouter} from "react-router-dom";

export const App = () => {

	return(
		<BrowserRouter>
			<HomeTemplate/>
		</BrowserRouter>
	)
}