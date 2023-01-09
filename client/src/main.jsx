import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Dashboard from './component/dashboard'
import { Children } from 'react'
import Layout from './component/layout'
import Courrier from './feature/courrier'
import Contact from './feature/contact'
import Compagnie from './feature/compagnie'
import Setting from './feature/setting'


const rooter = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '/dashboard',
        element : <Dashboard />
      },
      {
        path : '/courrier',
        element : <Courrier/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/compagnie',
        element : <Compagnie/>
      },
      {
        path : '/setting',
        element : <Setting/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={rooter}/>
  </React.StrictMode>,
)
