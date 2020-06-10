import React from "react";
import {ApplicationScheduleKindOfDish} from "./ApplicationScheduleWeekKindOfDish";
import {ApplicationScheduleWeekElements} from "./ApplicationScheduleWeekElements";
import {ApplicationScheduleWeekElement} from "./ApplicationScheduleWeekElement";

export const ApplicationScheduleWeek = () => {

	return (
		<div className='week'>
			<ApplicationScheduleKindOfDish/>
			<ApplicationScheduleWeekElements>
				<ApplicationScheduleWeekElement day={'poniedziałek'}/>
				<ApplicationScheduleWeekElement day={'wtorek'}/>
				<ApplicationScheduleWeekElement day={'środa'}/>
				<ApplicationScheduleWeekElement day={'czwartek'}/>
				<ApplicationScheduleWeekElement day={'piątek'}/>
				<ApplicationScheduleWeekElement day={'sobota'}/>
				<ApplicationScheduleWeekElement day={'niedziela'}/>
			</ApplicationScheduleWeekElements>
		</div>
	)
}