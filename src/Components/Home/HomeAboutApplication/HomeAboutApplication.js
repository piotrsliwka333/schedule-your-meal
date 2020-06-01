import React from "react";
import {Container, Row} from "react-bootstrap";
import {HomeAboutApplicationElement} from "./HomeAboutApplicationElement";

export const HomeAboutApplication = () => {

	return (
		<section className='about-application' id='about-application'>
			<Container>
				<Row className='justify-content-center justify-content-xl-between'>
					<HomeAboutApplicationElement icon='fas fa-check' title='Lorem ipsum dolor sit amet.'
					                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sit, vero. Cumque error nesciunt sequi veritatis? Aspernatur commodi consequatur dolorem ea earum fugit necessitatibus quas quasi quisquam sed. Aliquid, voluptates.'}/>
					<HomeAboutApplicationElement icon='far fa-clock' title={'Lorem ipsum dolor sit amet.'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur corporis ducimus, explicabo inventore minus perspiciatis possimus repellendus sequi sit vero voluptas. Aspernatur aut enim inventore necessitatibus sed, sunt tenetur!'}/>
					<HomeAboutApplicationElement icon='fas fa-list' title={'Lorem ipsum dolor sit amet.'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur corporis ducimus, explicabo inventore minus perspiciatis possimus repellendus sequi sit vero voluptas. Aspernatur aut enim inventore necessitatibus sed, sunt tenetur!'}/>
				</Row>
			</Container>
		</section>
	)
}