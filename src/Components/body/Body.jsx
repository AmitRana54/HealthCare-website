import React from "react";
import Information from "./Information";
import Services from "./Services";
import ImageCard from "./ImageCard";
import WhyIHCS from "./WhyIHCS";
import HomeServices from "../HomeServices/HomeServices";

function Body() {
  return (
    <>
      <Information />

     

      <Services />
      <HomeServices/>
      <ImageCard />
      <WhyIHCS/>
    </>
  );
}

export default Body;
