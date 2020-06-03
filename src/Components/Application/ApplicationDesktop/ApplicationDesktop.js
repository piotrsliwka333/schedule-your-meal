import React from "react";
import {ApplicationTemplate} from "../../Templates/ApplicationTemplate";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const ApplicationDesktop = () => {

	return (
		<ApplicationTemplate>
			<section className='desktop'>
				<Container fluid>
					<Row>
						<Col className='col-12 col-md-5 col-xl-5 desktop__buttons-wrapper'>
							<div className="desktop__button-container">
								<Link className='desktop__button' to='/application/recipes'>
									<i className="far fa-plus-square"/>
								</Link>
								<p className='button-description'>przepisy</p>
							</div>
							<div className="desktop__button-container">
								<Link className='desktop__button' to='/application/schedule'>
									<i className="far fa-plus-square"/>
								</Link>
								<p className='button-description'>plan</p>
							</div>
							<div className="desktop__button-container">
								<Link className='desktop__button' to='/application/shopping'>
									<i className="far fa-plus-square"/>
								</Link>
								<p className='button-description'>zakupy</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</ApplicationTemplate>
	)
}