import React from "react";
import AboutHeroBanner from "../Components/AboutHeroBanner";
import NewsLitter from "../Components/NewsLitter";
import OurTeam from "../Components/OurTeam";
import SomeInfo from "../Components/SomeInfo";
import WorkWithus from "../Components/WorkWithus";

function About() {
  return (
    <div className="mt-5">
      <AboutHeroBanner />
      <WorkWithus />
      <SomeInfo />
      <OurTeam />
      <NewsLitter />
    </div>
  );
}

export default About;
