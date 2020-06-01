import React from "react";
import {Col, Container, Row} from "react-bootstrap";

export const CallAction = () => {

	return (
		<section className='call-action'>
			<Container>
				<Row className='justify-content-center'>
					<Col className='col-10 col-md-10 col-xl-8 call-action__content'>
						<h3 className='call-action__title'>Lorem ipsum dolor sit amet</h3>
						<p className='call-action__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error
							est harum id iusto laborum neque odio quasi quod rem.
						</p>
					</Col>
					<Col className='col-10 col-md-10 col-xl-3 call-action__content'>
						<button className='home-button call-action__button'>Lorem ipsum</button>
					</Col>
				</Row>
			</Container>
		</section>
	)
}