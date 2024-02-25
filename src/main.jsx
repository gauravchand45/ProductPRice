import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Trending from './components/Trending.jsx'
import BestSellers from './components/BestSellers.jsx'
import ContactUs from './components/ContactUs.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"trending",
        element:<Trending/>
      },
      {
        path:"bestSeller",
        element:<BestSellers/>
      },
      {
        path:"about",
        element:<AboutUs/>
      },
      {
        path:"contact",
        element:<ContactUs/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
