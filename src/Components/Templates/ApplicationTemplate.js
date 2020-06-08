import React, {useEffect, useState} from "react";
import {Logo} from "./Logo";
import appBcg from '../../images/image.png'
import {NavLink} from "react-router-dom";
import * as firebase from "firebase";
import {auth} from "firebase";

const style = {
	backgroundImage: `url('${appBcg}')`
}

export const ApplicationTemplate = (props) => {
	const [logged,setLogged] = useState(false)
	const [openMenu,setOpenMenu] = useState( false)
	const [name,setName] = useState('Imie')

	// hamburger logic
	const handleOpenMenu = (e) => {
		e.preventDefault();
		setOpenMenu(!openMenu)
	}

	//logout logic
	const handleLogOut = (e) => {
		e.preventDefault();
		firebase.auth().signOut().then(r => console.log(r)).catch(err => console.log(err));
	}

	useEffect(() => {
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser) {
				setLogged(true)
				setName(firebaseUser.email)
			} else {
				setLogged(false)
			}
		})
	},[])

	return (
		<>
			<header className='app-header'>
				<Logo/>
				<div className='user-box'>
					<div className='user-wrapper'>
						{logged && <button className='user-box__logout' onClick={e => handleLogOut(e)}>
							<i className="fas fa-power-off"/>
						</button>}
						<span className='user-box__name'>{name}</span>
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
						<li className="nav-list__element"><NavLink to='/schedule-your-meal/application/desktop' className='nav-list__link'>Pulpit</NavLink></li>
						<li className="nav-list__element"><NavLink to='/schedule-your-meal/application/recipes' className='nav-list__link'>Przepisy</NavLink></li>
						<li className="nav-list__element"><NavLink to='/schedule-your-meal/application/schedule' className='nav-list__link'>Plany</NavLink></li>
					</ul>
				</nav>
				<div className='main-content' style={style}>
					{props.children}
				</div>
			</main>
		</>
	)
}