import React from "react";
import HeroBanner from "../Components/HeroBanner";
import NewsLitter from "../Components/NewsLitter";
import OurProducts from "../Components/OurProducts";
import TreandingGames from "../Components/TreandingGames";

function Home() {
  return (
    <div>
      <HeroBanner />
      <TreandingGames />
      <OurProducts />
      <NewsLitter />
    </div>
  );
}

export default Home;
