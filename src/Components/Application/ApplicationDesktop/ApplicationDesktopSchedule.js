import React, {useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import {ApplicationDesktopScheduleElement} from "./ApplicationDesktopScheduleElement";
import {ApplicationDesktopScheduleButtons} from "./ApplicationDesktopScheduleButtons";
import * as firebase from "firebase";

export const ApplicationDesktopSchedule = () => {
	const [schedules, setSchedules] = useState(false)
	const [currentWeek, setCurrentWeek] = useState(0) // it mean index from schedules

	useEffect(() => {
		let db = firebase.firestore()
		let user = firebase.auth().currentUser

		db.collection('users').doc(user.uid).collection('schedules').onSnapshot(snapshot => {

			let changes = snapshot.docChanges()
			let newArray = changes.map(change => {
				let dataToSeT = change.doc.data()
				dataToSeT.id = change.doc.id
				return dataToSeT
			})
			let sortedArray = newArray.sort((a, b) => a.weekNumber - b.weekNumber)
			setSchedules(sortedArray)
		})

	}, [])

	const nextWeek = (e) => {
		e.preventDefault()

		if(currentWeek === schedules.length - 1) {
			setCurrentWeek(0)
		} else {
			setCurrentWeek(prevState => prevState + 1)
		}
	}

	const prevWeek = (e) => {
		e.preventDefault()

		if(currentWeek === 0) {
			setCurrentWeek(schedules.length - 1)
		}
		else {
			setCurrentWeek(prevState => prevState - 1)
		}
	}

	if (!schedules) return <h1>Data Loading</h1>
	return (
		<div className='desktop__schedule'>

			{typeof schedules[currentWeek] === 'undefined' ?
				<>
				<h1 className='desktop__schedule__title'>
					Twój plan na Przykładowy Tydzień tydzień:
				</h1>
				<Container fluid className='overflow-auto desktop__schedule-wrapper'>
					<Row>
						<ApplicationDesktopScheduleElement day='Poniedziałek' breakfast='Przykładowe Danie'
						                                   secondBreakfast='Przykładowe Danie'
						                                   soup='Przykładowe Danie'
						                                   dinner='Przykładowe Danie'
						                                   supper='Przykładowe Danie'/>
						<ApplicationDesktopScheduleElement day='Wtorek' breakfast='Przykładowe Danie'
						                                   secondBreakfast='Przykładowe Danie'
						                                   soup='Przykładowe Danie'
						                                   dinner='Przykładowe Danie'
						                                   supper='Przykładowe Danie'/>
						<ApplicationDesktopScheduleElement day='Środa' breakfast='Przykładowe Danie'
						                                   secondBreakfast='Przykładowe Danie'
						                                   soup='Przykładowe Danie'
						                                   dinner='Przykładowe Danie'
						                                   supper='Przykładowe Danie'/>
						<ApplicationDesktopScheduleElement day='Czwartek' breakfast='Przykładowe Danie'
						                                   secondBreakfast='Przykładowe Danie'
						                                   soup='Przykładowe Danie'
						                                   dinner='Przykładowe Danie'
						                                   supper='Przykładowe Danie'/>
						<ApplicationDesktopScheduleElement day='Piątek' breakfast='Przykładowe Danie'
						                                   secondBreakfast='Przykładowe Danie'
						                                   soup='Przykładowe Danie'
						                                   dinner='Przykładowe Danie'
						                                   supper='Przykładowe Danie'/>
						<ApplicationDesktopScheduleElement day='Sobota' breakfast='Przykładowe Danie'
						                                   secondBreakfast='Przykładowe Danie'
						                                   soup='Przykładowe Danie'
						                                   dinner='Przykładowe Danie'
						                                   supper='Przykładowe Danie'/>
						<ApplicationDesktopScheduleElement day='Niedziela' breakfast='Przykładowe Danie'
						                                   secondBreakfast='Przykładowe Danie'
						                                   soup='Przykładowe Danie'
						                                   dinner='Przykładowe Danie'
						                                   supper='Przykładowe Danie'/>
					</Row>
				</Container>
			</> : <>
				<h1 className='desktop__schedule__title'>
					Twój plan na {schedules[currentWeek].weekNumber} tydzień:
				</h1>
				<Container fluid className='overflow-auto desktop__schedule-wrapper'>
					<Row>
						<ApplicationDesktopScheduleElement day='Poniedziałek' breakfast={schedules[currentWeek].monday.breakfast}
						                                   secondBreakfast={schedules[currentWeek].monday.secondBreakfast}
						                                   soup={schedules[currentWeek].monday.soup}
						                                   dinner={schedules[currentWeek].monday.dinner}
						                                   supper={schedules[currentWeek].monday.supper}/>
						<ApplicationDesktopScheduleElement day='Wtorek' breakfast={schedules[currentWeek].tuesday.breakfast}
						                                   secondBreakfast={schedules[currentWeek].tuesday.secondBreakfast}
						                                   soup={schedules[currentWeek].tuesday.soup}
						                                   dinner={schedules[currentWeek].tuesday.dinner}
						                                   supper={schedules[currentWeek].tuesday.supper}/>
						<ApplicationDesktopScheduleElement day='Środa' breakfast={schedules[currentWeek].wednesday.breakfast}
						                                   secondBreakfast={schedules[currentWeek].wednesday.secondBreakfast}
						                                   soup={schedules[currentWeek].wednesday.soup}
						                                   dinner={schedules[currentWeek].wednesday.dinner}
						                                   supper={schedules[currentWeek].wednesday.supper}/>
						<ApplicationDesktopScheduleElement day='Czwartek' breakfast={schedules[currentWeek].thursday.breakfast}
						                                   secondBreakfast={schedules[currentWeek].thursday.secondBreakfast}
						                                   soup={schedules[currentWeek].thursday.soup}
						                                   dinner={schedules[currentWeek].thursday.dinner}
						                                   supper={schedules[currentWeek].thursday.supper}/>
						<ApplicationDesktopScheduleElement day='Piątek' breakfast={schedules[currentWeek].friday.breakfast}
						                                   secondBreakfast={schedules[currentWeek].friday.secondBreakfast}
						                                   soup={schedules[currentWeek].friday.soup}
						                                   dinner={schedules[currentWeek].friday.dinner}
						                                   supper={schedules[currentWeek].friday.supper}/>
						<ApplicationDesktopScheduleElement day='Sobota' breakfast={schedules[currentWeek].saturday.breakfast}
						                                   secondBreakfast={schedules[currentWeek].saturday.secondBreakfast}
						                                   soup={schedules[currentWeek].saturday.soup}
						                                   dinner={schedules[currentWeek].saturday.dinner}
						                                   supper={schedules[currentWeek].saturday.supper}/>
						<ApplicationDesktopScheduleElement day='Niedziela' breakfast={schedules[currentWeek].sunday.breakfast}
						                                   secondBreakfast={schedules[currentWeek].sunday.secondBreakfast}
						                                   soup={schedules[currentWeek].sunday.soup}
						                                   dinner={schedules[currentWeek].sunday.dinner}
						                                   supper={schedules[currentWeek].sunday.supper}/>


					</Row>
				</Container>
			</>}

			<ApplicationDesktopScheduleButtons nextWeek={nextWeek} prevWeek={prevWeek}/>
		</div>
	)
}