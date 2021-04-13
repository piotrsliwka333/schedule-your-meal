import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Author from '../../../images/image.png'

export const HomeAboutAuthor = () => {

	return (
		<section className='about-author' id='about-author'>
			<Container>
				<Row className='justify-content-center'>
					<Col className='col-10 col-md-10 col-xl-5 about-author__content'>
						<img alt='author' className='about-author__image' src={Author}/>
					</Col>
					<Col className='col-10 col-md-10 col-xl-5 about-author__content'>
						<h6 className='about-author__title'>Lorem ipsum dolor sit amet</h6>
						<p className='about-author__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur
							illum incidunt inventore ipsam ipsum, magni molestias natus, necessitatibus officiis porro rem suscipit
							voluptatem? At consequatur laboriosam quam sequi tempore.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	)
}