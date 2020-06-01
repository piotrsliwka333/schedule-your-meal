import React, {useState} from "react";
import {Logo} from "./Logo";
import {Link, NavLink} from "react-router-dom";

export const HomeTemplate = (props) => {
	const [menuOpen,setMenuOpen] = useState(false)

	const handleShowMenu = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<>
			<header className='heder'>
				<Logo/>
				<a onClick={handleShowMenu} className='menu-toggle'>
					<i className="fas fa-bars"/>
				</a>
				<nav className={menuOpen ? 'home-nav' : 'home-nav hide'}>
					<ul className='home-nav__list'>
						<li className='home-nav__element'><Link className='home-nav__link active' to={'/application/login'}>Zaplanuj
							posiłki</Link></li>
						<li className='home-nav__element'><NavLink onClick={handleShowMenu} className='home-nav__link' to={'/why'}>Dlaczego warto ?</NavLink>
						</li>
						<li className='home-nav__element'><NavLink onClick={handleShowMenu} className='home-nav__link' to={'/about'}> O mnie </NavLink></li>
						<li className='home-nav__element'><NavLink onClick={handleShowMenu} className='home-nav__link' to={'/contact'}>Contact</NavLink></li>
					</ul>
				</nav>
			</header>
			{props.children}
		</>
	)
}