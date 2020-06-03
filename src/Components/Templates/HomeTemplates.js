import React, {useState} from "react";
import {Logo} from "./Logo";
import {Link} from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll'

export const HomeTemplate = (props) => {
	const [menuOpen,setMenuOpen] = useState(false)

	const handleShowMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<>
			<header className='heder'>
				<Logo/>
				<button onClick={handleShowMenu} className='menu-toggle'>
					<i className="fas fa-bars"/>
				</button>
				<nav className={menuOpen ? 'home-nav' : 'home-nav hide'}>
					<ul className='home-nav__list'>
						<li className='home-nav__element'><Link className='home-nav__link active' to={'/schedule-your-meal/application/login'}>Zaplanuj
							posiłki</Link></li>
						<li className='home-nav__element'><LinkScroll smooth={true} to={'about-application'} onClick={handleShowMenu} className='home-nav__link'>Dlaczego warto ?</LinkScroll>
						</li>
						<li className='home-nav__element'><LinkScroll smooth={true} to={'about-author'} onClick={handleShowMenu} className='home-nav__link'> O mnie </LinkScroll></li>
						<li className='home-nav__element'><LinkScroll smooth={true} to={'contact'}  onClick={handleShowMenu} className='home-nav__link'>Contact</LinkScroll></li>
					</ul>
				</nav>
			</header>
			{props.children}
		</>
	)
}