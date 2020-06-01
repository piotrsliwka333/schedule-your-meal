import React from "react";
import {HomeTemplate} from "../Templates/HomeTemplates";
import {HomeSlider} from "./HomeSlider/HomeSlider";

export const Home = () => {

	return(
		<HomeTemplate>
			<main>
				<HomeSlider/>
			</main>
		</HomeTemplate>
	)
}