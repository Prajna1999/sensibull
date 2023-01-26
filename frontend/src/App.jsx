import { useState } from 'react'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme.js';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

import Layout from './scenes/Layout.jsx';
import PlaceOrderCard from './scenes/PlaceOrder.jsx';
import { element } from 'prop-types';

//temporary error element. to be made a component later
function ErrorBoundary(){
  let error=useRouteError()

  console.log(error)
  return <h2>{`Oops! ${error}`}</h2>
}

function App() {
  
  


  const router=createBrowserRouter(
    [
      {
        path:'/',
        element:<Layout/>,
        errorElement:<ErrorBoundary/>
      },

      {
        path:'placeorder',
        element:<PlaceOrderCard />,
        errorElement:<ErrorBoundary />

      },
      {
        path:'*',
        element:<ErrorBoundary />

      }
    ]
  )

  
  return (
    <div className="App">
     
      
        
        <RouterProvider router={router} />

      
        
      
    </div>
  )
}

export default App
