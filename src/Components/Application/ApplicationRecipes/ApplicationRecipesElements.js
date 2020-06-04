import React from "react";
import {ApplicationDesktopScheduleElement} from "../ApplicationDesktop/ApplicationDesktopScheduleElement";

export const ApplicationRecipesElements = (props) => {

	return (
		<ol className='recipes__elements-box '>
			{props.children}
		</ol>
	)
}