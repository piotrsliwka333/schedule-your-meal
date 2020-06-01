import React from "react";
import {HomeTemplate} from "../Templates/HomeTemplates";
import {HomeSlider} from "./HomeSlider/HomeSlider";
import {CallAction} from "./CallAction/CallAction";

export const Home = () => {

	return(
		<HomeTemplate>
			<main>
				<HomeSlider/>
				<CallAction/>
			</main>
		</HomeTemplate>
	)
}