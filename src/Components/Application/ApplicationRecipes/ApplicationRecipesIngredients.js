import React from "react";
import {ApplicationRecipesElements} from "./ApplicationRecipesElements";
import {ApplicationRecipesElement} from "./ApplicationRecipesElement";
import {Col} from "react-bootstrap";

export const ApplicationRecipesIngredients = () => {

	return(
		<Col className='recipes__ingredients col-12 col-md-6 col-xl-6'>
			<h2 className='recipes__ingredients__title'>Składniki</h2>
			<form className='ingredients-form'>
				<div className='ingredients-form-wrapper'>
					<input placeholder='podaj nazwę składnika' className='ingredients-form__input'/>
					<button className='ingredients-form__button'>
						<i className="fas fa-plus-square"/>
					</button>
				</div>
			</form>
			<ApplicationRecipesElements>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='pos siemanko kolanko'/>
				<ApplicationRecipesElement text='pos siemanko kolanko'/>
				<ApplicationRecipesElement text=' pos siemanko kolanko'/>
				<ApplicationRecipesElement text='dos siemanko kolanko'/>
				<ApplicationRecipesElement text='aaa siemanko kolanko'/>
				<ApplicationRecipesElement text='gos siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
			</ApplicationRecipesElements>
		</Col>
	)
}