import React, {useState} from "react";
import {Col} from "react-bootstrap";
import {ApplicationDesktopNotification} from "./ApplicationDesktopNotification";

export const ApplicationDesktopNotifications = () => {
	const [notification,setNotification] = useState({info:true,warning:true,cheering:true})

	const handleHideNotification = (e) => {
		e.preventDefault();
		const {name} = e.target
		setNotification(prevState => {
			return({
				...prevState,
				[name]: false
			})
		})
	}

	return (
		<Col className='col-12 col-md-7 col-xl-7 desktop__notifications-wrapper'>
			{notification.info && <ApplicationDesktopNotification display={handleHideNotification} name='info'
			 extraClass='info'	icon="fas fa-info-circle" text='masz już 99 przepisów, nieźle'/>}
			{notification.warning && <ApplicationDesktopNotification display={handleHideNotification} name='warning'
				extraClass='warning' icon="fas fa-exclamation-circle" text='Pamiętaj aby dodać przepis'/>}
			{notification.cheering && <ApplicationDesktopNotification display={handleHideNotification} name='cheering'
				extraClass='cheering' icon='fas fa-check-circle' text='Świetnie że jesteś! Udanego planowania i smacznego :)'/>}
		</Col>
	)
}