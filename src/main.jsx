import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './AppLayout'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Body from './Components/body/Body'
import OurServices from './Components/OurServices/OurServices'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout/>} >
<Route    path=''  element={<Body/>}       />
<Route   path='/services' element={<OurServices/> 
}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider   router={routes}      />
  </React.StrictMode>,
)
