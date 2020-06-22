import React from "react";
import {Logo} from "../../Templates/Logo";

export const ApplicationTutorial = () => {

	return (
		<div className='tutorial-container'>
			<div className='tutorial-bcg'>
			</div>
			<div className='tutorial'>
				<h1 className='tutorial-title'>Witaj w tutorialu</h1>
				<Logo/>
				<p className='tutorial__text'>Dowiesz się w nim jak wykorzystać w pełni aplikację
					zaplanujjedzonko tak żeby żadna nie umkneła twojej uwadze :)
				</p>
				<button className='home-button tutorial-btn'>Zaczynajmy</button>
			</div>
		</div>
	)
}