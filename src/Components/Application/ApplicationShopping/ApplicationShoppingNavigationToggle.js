import React from "react";

export const ApplicationShoppingNavigationToggle = (props) => {
	const {showOrHideNav} = props

	const checkShowOrHideNav = (e) => {
		if (typeof showOrHideNav === 'function') {
			showOrHideNav(e);
		}
	}
	return (
		<button onClick={e => checkShowOrHideNav(e)} className='shopping-navigation-toggle'>
			<i className="fas fa-utensils"/>
		</button>
	)
}