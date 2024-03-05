import React from "react";

export default function () {
  return (
    <footer className="h-[70vh] w-full bg-zinc-600   flex justify-between  rounded-lg">
      <div className="about  h-full w-1/3 flex justify-center ">
        <h4 className="text-2xl text-zinc-950">About us</h4>
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="servises h-ful w-1/3  flex items-center   flex-col     ">
        <h4 className="text-2xl text-zinc-950">OUR SERVICES</h4>
        <ul className="text-xl text-yellow-500 gap-2 mt-4 list-disc">
          <li>ICU Care</li>
          <li>Skill Nursing</li>
          <li>Attendant</li>
          <li>Japa Miad</li>
          <li>Cancer Patient</li>
          <li>Surgical Bed</li>
          <li>Suction Machine</li>
        </ul>
      </div>
      <div className="contacts hi w-1/3        flex justify-center         ">
        <h4 className="text-2xl text-zinc-950">Contact us</h4>
      </div>
    </footer>
  );
}
