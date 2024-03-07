import React from "react";
import Information from "./Information";
import Services from "./Services";
import ImageCard from "./ImageCard";
import WhyIHCS from "./WhyIHCS";

function Body() {
  return (
    <>
      <Information />

      <ImageCard />

      <Services />
      <WhyIHCS/>
    </>
  );
}

export default Body;
