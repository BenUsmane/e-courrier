import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Dashboard from './component/dashboard'


const rooter = createBrowserRouter([
  {
    path : '/',
    element : <Dashboard/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={rooter}/>
  </React.StrictMode>,
)
