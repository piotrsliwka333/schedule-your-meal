import React from "react";
import {Container, Row} from "react-bootstrap";
import {ApplicationDesktopScheduleElement} from "./ApplicationDesktopScheduleElement";
import {ApplicationDesktopScheduleButtons} from "./ApplicationDesktopScheduleButtons";

export const ApplicationDesktopSchedule = () => {

	return(
		<div className='desktop__schedule'>
			<h1 className='desktop__schedule__title'>
				Twój plan na nr_tygodnia tydzień:
			</h1>
			<Container fluid className='overflow-auto desktop__schedule-wrapper'>
				<Row >
					<ApplicationDesktopScheduleElement day='Poniedziałek' breakfast='jabłka' secondBreakfast='gorycz' soup='jarzynowa' dinner='golonka' supper='parówka'/>
					<ApplicationDesktopScheduleElement day='Wtorek' breakfast='jabłka' secondBreakfast='gorycz' soup='jarzynowa' dinner='golonka' supper='parówka'/>
					<ApplicationDesktopScheduleElement day='Środa' breakfast='jabłka' secondBreakfast='gorycz' soup='jarzynowa' dinner='golonka' supper='parówka'/>
					<ApplicationDesktopScheduleElement day='Czwartek' breakfast='jabłka dasdassad dadsdad asdadsd' secondBreakfast='gorycz' soup='jarzynowa' dinner='golonka' supper='parówka'/>
					<ApplicationDesktopScheduleElement day='Piątek' breakfast='jabłka' secondBreakfast='gorycz' soup='jarzynowa' dinner='golonka' supper='parówka'/>
					<ApplicationDesktopScheduleElement day='Sobota' breakfast='jabłka' secondBreakfast='gorycz' soup='jarzynowa' dinner='golonka' supper='parówka'/>
					<ApplicationDesktopScheduleElement day='Niedziela' breakfast='jabłka' secondBreakfast='gorycz' soup='jarzynowa' dinner='golonka' supper='parówka'/>
				</Row>
			</Container>
			<ApplicationDesktopScheduleButtons/>
		</div>
	)
}