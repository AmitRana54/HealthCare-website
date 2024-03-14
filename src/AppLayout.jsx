
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import ScrollToTop from "./ScrollToTop"
import "./App.css";
function AppLayout() {
 

  return (
    <>
    <ScrollToTop/>
   <Navbar/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default AppLayout
