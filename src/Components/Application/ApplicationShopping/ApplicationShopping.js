import React, {useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import {ApplicationShoppingNavigation} from "./ApplicationShoppingNavigation";
import {ApplicationShoppingNavigationToggle} from "./ApplicationShoppingNavigationToggle";
import {ApplicationShoppingList} from "./ApplicationShoppingList";

export const ApplicationShopping = () => {
	const [showNavigation, setShowNavigation] = useState(false)

	const handleChangeDisplayOfNavigation = (e) => {
		e.preventDefault()
		setShowNavigation(!showNavigation)
	}

	return (
		<ApplicationTemplate>
			<section className='shopping'>
				<ApplicationShoppingNavigationToggle showOrHideNav={handleChangeDisplayOfNavigation}/>
				<ApplicationShoppingNavigation showOrHide={showNavigation}/>
				<ApplicationShoppingList/>
			</section>
		</ApplicationTemplate>
	)
}