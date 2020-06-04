import React from "react";
import {Col} from "react-bootstrap";
import {ApplicationRecipesElements} from "./ApplicationRecipesElements";
import {ApplicationRecipesElement} from "./ApplicationRecipesElement";

export const ApplicationRecipesInstructions = () => {

	return(
		<Col className='recipes__instructions col-12 col-md-6 col-xl-6 h-35'>
			<h2 className='recipes__instructions__title'>INSTRUKCJE</h2>
			<form className='instructions-form'>
				<textarea placeholder='podaj treść instrukcji' className='instructions-form__textarea'/>
				<button className='instructions-form__button'>
					<i className="fas fa-plus-square"/>
				</button>
			</form>
			<ApplicationRecipesElements>
				<ApplicationRecipesElement text='siemanko kolankosiemanko kolankosiemanko kolankosiemanko '/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
				<ApplicationRecipesElement text='siemanko kolanko'/>
			</ApplicationRecipesElements>
		</Col>
	)
}