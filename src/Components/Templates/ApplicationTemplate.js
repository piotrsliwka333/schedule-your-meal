import React, {useState} from "react";
import {Logo} from "./Logo";
import appBcg from '../../images/image.png'
import {NavLink} from "react-router-dom";

const style = {
	backgroundImage: `url('${appBcg}')`
}

export const ApplicationTemplate = () => {
	const [openMenu,setOpenMenu] = useState( false)

	const handleOpenMenu = (e) => {
		e.preventDefault();
		setOpenMenu(!openMenu)
	}

	return (
		<>
			<header className='app-header'>
				<Logo/>
				<div className='user-box'>
					<div className='user-wrapper'>
						<span className='user-box__name'>Imie</span>
						<span className='user-box__icon'>
						<i className="far fa-user-circle"/>
					</span>
					</div>
					<button onClick={e => handleOpenMenu(e)} className='menu-toggle'>
						<i className="fas fa-bars"/>
					</button>
				</div>
			</header>
			<main className='app-main'>
				<nav className={openMenu ? 'side-navigation' : 'side-navigation hide'}>
					<ul className="nav-list">
						<li className="nav-list__element"><NavLink to='/application/pulpit' className='nav-list__link'>Pulpit</NavLink></li>
						<li className="nav-list__element"><NavLink to='/application/recipe' className='nav-list__link'>Przepisy</NavLink></li>
						<li className="nav-list__element"><NavLink to='/application/schedule' className='nav-list__link'>Plany</NavLink></li>
					</ul>
				</nav>
				<div className='main-content' style={style}>
				</div>
			</main>
		</>
	)
}