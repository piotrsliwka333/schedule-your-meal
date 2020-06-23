import React from "react";
import {ApplicationShoppingListAddNewProduct} from "./ApplicationShoppingListAddNewProduct";
import {ApplicationShoppingListElements} from "./ApplicationShoppingListElements";

export const ApplicationShoppingList = () => {

	return (
		<div className='shopping-list'>
			<ApplicationShoppingListAddNewProduct/>
			<ApplicationShoppingListElements/>
		</div>
	)
}