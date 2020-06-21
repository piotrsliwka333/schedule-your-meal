import React from "react";
import {Col} from "react-bootstrap";
import {ApplicationDesktopButton} from "./ApplicationDesktopButton";

export const ApplicationDesktopButtons = () => {
	return (
		<Col className='col-12 col-md-5 col-xl-5 desktop__buttons-wrapper'>
			<ApplicationDesktopButton name='przepis' direction='/schedule-your-meal/recipes'/>
			<ApplicationDesktopButton name='plan' direction={'/schedule-your-meal/schedule'}/>
			<ApplicationDesktopButton name='zakupy' direction='/schedule-your-meal/shopping'/>
		</Col>
	)
}