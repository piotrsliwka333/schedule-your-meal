import React, {useEffect, useState} from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import {Container, Row} from "react-bootstrap";
import {ApplicationDesktopButtons} from "./ApplicationDesktopButtons";
import {ApplicationDesktopNotifications} from "./ApplicationDesktopNotifications";
import {ApplicationDesktopSchedule} from "./ApplicationDesktopSchedule";
import {ApplicationTutorial} from "../ApplicationTutorial/ApplicationTutorial";

export const ApplicationDesktop = () => {
	const [showTutorial,setShowTutorial] = useState(true)

	const closeTutorial = (e) => {
		e.preventDefault();
		setShowTutorial(false)
		localStorage.setItem('tutorial','hide')
	}

	useEffect(() => {
		if (localStorage.getItem('tutorial') !== null) {
			setShowTutorial(false)
		}
	},[showTutorial])

	return (
		<>
			{showTutorial && <ApplicationTutorial closeTutorial={closeTutorial}/>}
		<ApplicationTemplate>
			<section className='desktop'>
				<Container fluid className='h-25 pr-0 pl-0 mb-1'>
					<Row>
						<ApplicationDesktopButtons/>
						<ApplicationDesktopNotifications/>
					</Row>
				</Container>
				<ApplicationDesktopSchedule/>
			</section>
		</ApplicationTemplate>
		</>
	)
}