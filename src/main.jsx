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
import Icu from "./Components/Homeservices/Icu";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Body />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/book" element={<BookNow/>}/>
      <Route path="/icu" element = { <Icu/>} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
