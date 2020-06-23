import React, {useState} from "react";
import {ApplicationTutorialIntroduction} from "./ApplicationTutorialIntroducion";
import tutorialDesktop from '../../../images/TutorialDesktop.png'
import tutorialNewRecipe from '../../../images/recipeTutorial.png'
import tutorialRecipeList from '../../../images/tutorialRecipesList.png'
import tutorialNewSchedule from '../../../images/TutorialNewSchedule.png'
import tutorialScheduleList from '../../../images/TutorialListaPlanów.png'
import tutorialShopping from '../../../images/TutorialShopping.png'
import {ApplicationTutorialElement} from "./ApplicationTutorialElement";
import {ApplicationTutorialStart} from "./ApplicationTutorialStart";

export const ApplicationTutorial = (props) => {
	const {closeTutorial} = props
	const [currentPage, setCurrentPage] = useState(0)

	const handleCheckCloseTutorial = (e) => {
		if (typeof closeTutorial === 'function') {
			closeTutorial(e);
		}
	}

	const nextPage = (e) => {
		e.preventDefault();
		setCurrentPage(prevState => prevState + 1)
	}

	const previousPage = (e) => {
		e.preventDefault();
		setCurrentPage(prevState => prevState - 1)
	}
	return (
		<div className='tutorial-container'>
			<div className='tutorial-bcg'>
			</div>
			<div className='tutorial'>
				<button onClick={e => handleCheckCloseTutorial(e)} className='close-tutorial-btn'>
					<i className="fas fa-times"/>
				</button>
				{currentPage === 0 && <ApplicationTutorialIntroduction nextPage={nextPage}/>}
				{currentPage === 1 &&
				<ApplicationTutorialElement nextPage={nextPage} previousPage={previousPage} image={tutorialDesktop}
				                            title='Pulpit'
				                            text='Na pulpicie masz szybki podgląd planów na dany tydzień,które zostały dodane przez Ciebie, otrzymujesz informacje o ilości posiadanych przepisów oraz możesz dodać nowy plan,przepis,albo zakupy'/>}
				{currentPage === 2 &&
				<ApplicationTutorialElement nextPage={nextPage} previousPage={previousPage} image={tutorialNewRecipe}
				                            title='Nowy Przepis'
				                            text='W sekcji nowy przepis możesz dodać przepis, który składa się z opisu,nazwy,instrukcji i składników. Podczas dodawania możesz usuwać lub edytować podane przez ciebie informacje'/>}
				{currentPage === 3 &&
				<ApplicationTutorialElement nextPage={nextPage} previousPage={previousPage} image={tutorialRecipeList}
				                            title='Lista Przepisów'
				                            text='Lista przepisów wyświetli dla Ciebie wszystkie przepisy które już dodałeś, a które potem będziesz mógł użyć podczas tworzenia nowego planu '/>}
				{currentPage === 4 &&
				<ApplicationTutorialElement nextPage={nextPage} previousPage={previousPage} image={tutorialNewSchedule}
				                            title='Nowy Plan'
				                            text='W sekcji Nowy Plan możesz na bazie dodanych przez ciebie przepisów skonstruować plan na dany tydzień poprzez wybieranie z listy '/>}
				{currentPage === 5 &&
				<ApplicationTutorialElement nextPage={nextPage} previousPage={previousPage} image={tutorialScheduleList}
				                            title='Lista Planów'
				                            text='Lista planów pokazuje dodane przez ciebie plany na dany tydzień, które również będziesz w stanie zobaczyć na głównej stronie aplikacji (pulpit)'/>}
				{currentPage === 6 &&
				<ApplicationTutorialElement nextPage={nextPage} previousPage={previousPage} image={tutorialShopping}
				                            title='Zakupy'
				                            text='W sekcji zakupy możesz wybrać już istniejący przepis żeby dodać jego składniki do listy zakupów albo dodać swój własny produkt'/>}
				{currentPage === 7 && <ApplicationTutorialStart closeTutorial={closeTutorial}/>}
			</div>
		</div>
	)
}