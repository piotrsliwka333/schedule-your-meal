import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export const HomeNewsLetter = () => {

	return(
		<section className='news-letter'>
			<Container>
				<Row className='align-items-center'>
					<Col className='col-12 col-md-5 '>
						<h5 className='news-letter__title'>Lorem ipsum dolor sit amet</h5>
					</Col>
					<Col className='col-12 col-md-7'>
						<form className='news-letter-form'>
							<input type='text' className='news-letter-form__input'/>
							<button type='submit' className='home-button news-letter-form__button'>Lorem ipsum</button>
						</form>
					</Col>
				</Row>
			</Container>

		</section>
	)
}