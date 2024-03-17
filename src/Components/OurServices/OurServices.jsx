import React from "react";
import Services from "../body/Services";
import BookNow from "../Booknow/BookNow";
import Steps from "../Booknow/Steps";

export default function OurServices() {
  return (
    <>
      <div className=" h-auto w-full mt-16 ">
        {" "}
        <Services />
        <Steps/>
        <BookNow />
      </div>
    </>
  );
}
