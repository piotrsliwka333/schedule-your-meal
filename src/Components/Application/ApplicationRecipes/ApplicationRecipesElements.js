import React from "react";

export const ApplicationRecipesElements = (props) => {
	return (
		<ol className='recipes__elements-box '>
			{props.children}
		</ol>
	)
}