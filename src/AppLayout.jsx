
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
function AppLayout() {
 

  return (
    <>
   <Navbar/>
   <Outlet/>
   <Footer/>
    </>
  )
}

export default AppLayout
