import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import {HomeSliderContent} from "./HomeSliderContent";

export const HomeSlider = () => {

	const [currentSlide, setCurrentSlide] = useState(1)

	const handleNextSlide = () => {
		if (currentSlide === 3) {
			setCurrentSlide(1)
		} else {
			setCurrentSlide(prevState => prevState + 1)
		}
	}

	const handlePrevSlide = () => {
		if (currentSlide === 1) {
			setCurrentSlide(3)
		} else {
			setCurrentSlide(prevState => prevState - 1)
		}
	}


	return (
		<section className='slider'>
			<Container >
				<Row className='align-items-center'>
					<span onClick={handlePrevSlide} className='slider__arrows col-2 col-md-1 col-xl-1'>
						<i className="fas fa-chevron-left"/>
					</span>
					{currentSlide === 1 && <HomeSliderContent title={'Pyszne'}
					                                          text={'Lorem elimo ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae dignissimos doloribus eaque enim, iure obcaecati quisquam reprehenderit unde velit? Aliquam debitis dolorum ea ex excepturi hic nisi sit vero!'}/>}
					{currentSlide === 2 && <HomeSliderContent title={'Dobre'}
					                                          text={'Lorem alemo ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae dignissimos doloribus eaque enim, iure obcaecati quisquam reprehenderit unde velit? Aliquam debitis dolorum ea ex excepturi hic nisi sit vero!'}/>}
					{currentSlide === 3 && <HomeSliderContent title={'Mniam'}
					                                          text={'Lorem  pikasso ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae dignissimos doloribus eaque enim, iure obcaecati quisquam reprehenderit unde velit? Aliquam debitis dolorum ea ex excepturi hic nisi sit vero!'}/>}
					<span onClick={handleNextSlide} className='slider__arrows col-2 col-md-1 col-xl-1'>
						<i className="fas fa-chevron-right"/>
					</span>
				</Row>
			</Container>
		</section>
	)
}