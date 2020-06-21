import React from "react";

export const ApplicationShoppingNavigation = (props) => {
	const {showOrHide} = props
	return(
		<nav className={showOrHide ? 'shopping-navigation' : 'shopping-navigation hide'}>

		</nav>
	)
}