import React from "react";
import { HomeTemplate } from "../../Templates/HomeTemplates";
import { HomeSlider } from "../../Components/Home/HomeSlider/HomeSlider";
import { CallAction } from "../../Components/Home/CallAction/CallAction";
import { HomeAboutApplication } from "../../Components/Home/HomeAboutApplication/HomeAboutApplication";
import { HomeNewsLetter } from "../../Components/Home/HomeNewsLetter/HomeNewsLetter";
import { HomeAboutAuthor } from "../../Components/Home/HomeAboutAuthor/HomeAboutAuthor";
import { HomeFooter } from "../../Components/Home/HomeFooter/HomeFooter";

export const Home = () => {
  return (
    <HomeTemplate>
      <main>
        <HomeSlider />
        <CallAction />
        <HomeAboutApplication />
        <HomeNewsLetter />
        <HomeAboutAuthor />
      </main>
      <HomeFooter />
    </HomeTemplate>
  );
};
