import React from "react";
import BannerSection from "../../Components/BannerSection/BannerSection";
import { BestCategories } from "../../Components/BestCategories/BestCategories";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { SellFeature } from "../../Components/SellFeature/SellFeature";
import SliderSection from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <SliderSection />
      <BestCategories />
      <BannerSection />
      <SellFeature />
      <Footer />
    </div>
  );
};

export default Home;
