import React from "react";
import {HomeTemplate} from "../Templates/HomeTemplates";
import {HomeSlider} from "./HomeSlider/HomeSlider";
import {CallAction} from "./CallAction/CallAction";
import {HomeAboutApplication} from "./HomeAboutApplication/HomeAboutApplication";

export const Home = () => {

	return(
		<HomeTemplate>
			<main>
				<HomeSlider/>
				<CallAction/>
				<HomeAboutApplication/>
			</main>
		</HomeTemplate>
	)
}