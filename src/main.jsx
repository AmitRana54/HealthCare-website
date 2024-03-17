import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout";
import "./index.css";
import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Body from "./Components/body/Body";
import OurServices from "./Components/OurServices/OurServices";
import BookNow from "./Components/Booknow/BookNow";
import Contactus from "./Components/Aboutus_ContactUs/Contactus/Contactus";
import Attentendant from "./Components/Allservices/Attentendant";
import Aboutus from "./Components/Aboutus_ContactUs/Aboutus";
import Icu from "./Components/Allservices/Icu";
import SkillNursing from "./Components/Allservices/SkillNursing";
import Physiotherapist from "./Components/Allservices/Physiotherapist";
import JapaMaid from "./Components/Allservices/JapaMaid";
import CancerPatient from "./Components/Allservices/CancerPatient";
import SurgicalBed from "./Components/Allservices/SurgicalBed";
import SuctionMachine from "./Components/Allservices/SuctionMachine";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Body />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/book" element={<BookNow />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/icu" element={<Icu />} />
      <Route path="/skillnursing" element={<SkillNursing />} />
      <Route path="/attendant" element={<Attentendant />} />
      <Route path="/physiotherapist" element={<Physiotherapist />} />
      <Route path="/japamaid" element={<JapaMaid />} />
      <Route path="/cancerpatient" element={<CancerPatient />} />
      <Route path="/surgicalbed" element={<SurgicalBed />} />
      <Route path="/suctionmachine" element={<SuctionMachine />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
