import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export const HomeFooter = () => {

	return (
		<footer className='contact' id='contact'>
			<Container>
				<Row className='justify-content-center'>
					<Col className='col-10 col-md-5 col-xl-4 contact-content'>
						<h6 className='contact__title'>Lorem ipsum dolor</h6>
						<p className='contact__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa,
							dolores excepturi exercitationem ipsa itaque nihil nisi nostrum odit quasi!
						</p>
					</Col>
					<Col className='col-10 col-md-5 col-xl-4 contact-content'>
						<h6 className='contact__title'>Lorem ipsum dolor</h6>
						<ul className='contact-list'>
							<li className="contact-list__item">Lorem ipsum dolor sit amet</li>
							<li className="contact-list__item">Corporis maxime perspiciatis</li>
							<li className="contact-list__item">Lorem ipsum dolor sit amet,</li>
							<li className="contact-list__item">Lore Ad aspernatur conseq</li>
							<li className="contact-list__item">Lorem ipsum dolor sit amet,</li>
						</ul>
					</Col>
					<Col className='col-10 col-md-5 col-xl-4 contact-content'>
						<h6 className='contact__title'>Lorem ipsum dolor</h6>
						<form className='contact-form'>
							<input className='contact-form__input' type='text'/>
							<button type='submit' className='home-button contact-form__button'>Lorem</button>
						</form>
						<div className='contact-social-media'>
							<a rel="noopener noreferrer" className='contact-social-media__icon' target='_blank'
							   href='https://www.linkedin.com/in/piotr-%C5%9Bliwka/'>
								<i className="fab fa-linkedin"/>
							</a>
							<a rel="noopener noreferrer" className='contact-social-media__icon' target='_blank'
							   href='https://www.facebook.com/piotr.sliwka.1272/'>
								<i className="fab fa-facebook-square"/>
							</a>
							<a rel="noopener noreferrer" className='contact-social-media__icon' target='_blank'
							   href='https://github.com/piotrsliwka333'>
								<i className="fab fa-github-square"/>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
			<p className='contact__copyright'>copyright <span
				className='contact__copyright-highlight'> ZaplanujJedzonko.pl</span></p>
		</footer>
	)
}