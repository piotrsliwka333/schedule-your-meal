import React from "react";
import {Col} from "react-bootstrap";
import {ApplicationDesktopButton} from "./ApplicationDesktopButton";

export const ApplicationDesktopButtons = () => {
	return(
		<Col className='col-12 col-md-5 col-xl-5 desktop__buttons-wrapper'>
			<ApplicationDesktopButton name='przepis' direction='/schedule-your-meal/application/recipes'/>
			<ApplicationDesktopButton name='plan' direction={'/schedule-your-meal/application/schedule'}/>
			<ApplicationDesktopButton name='zakupy' direction='/schedule-your-meal/application/schedule'/>
		</Col>
	)
}