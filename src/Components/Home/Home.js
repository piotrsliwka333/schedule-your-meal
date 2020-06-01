import React from "react";
import {HomeTemplate} from "../Templates/HomeTemplates";
import {HomeSlider} from "./HomeSlider/HomeSlider";
import {CallAction} from "./CallAction/CallAction";
import {HomeAboutApplication} from "./HomeAboutApplication/HomeAboutApplication";
import {HomeNewsLetter} from "./HomeNewsLetter/HomeNewsLetter";

export const Home = () => {

	return(
		<HomeTemplate>
			<main>
				<HomeSlider/>
				<CallAction/>
				<HomeAboutApplication/>
				<HomeNewsLetter/>
			</main>
		</HomeTemplate>
	)
}