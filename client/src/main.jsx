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
import AddCourrier from './feature/courrier/addCourrier'
import AddContact from './feature/contact/addContact'
import AddCompagnie from './feature/compagnie/addCompagnie'


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
        path : '/courrier/add',
        element : <AddCourrier/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/contact/add',
        element : <AddContact/>
      },
      {
        path : '/compagnie',
        element : <Compagnie/>
      },
      {
        path : '/compagnie',
        element : <AddCompagnie/>
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
