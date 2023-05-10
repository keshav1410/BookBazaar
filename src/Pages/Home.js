import React from "react";
import Navbar from "../Components/Navbar";
import Crousal from "../Components/Crousal";
import CategorySection from "../Components/CategorySection";
import InfoSection from "../Components/InfoSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Crousal />
      <InfoSection />
      <CategorySection />
    </>
  );
};

export default Home;
