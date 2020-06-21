import React from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import {Container, Row} from "react-bootstrap";
import {ApplicationDesktopButtons} from "./ApplicationDesktopButtons";
import {ApplicationDesktopNotifications} from "./ApplicationDesktopNotifications";
import {ApplicationDesktopSchedule} from "./ApplicationDesktopSchedule";

export const ApplicationDesktop = () => {
	return (
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
	)
}