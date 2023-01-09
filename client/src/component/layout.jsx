import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './sideBar'

export default function Layout() {
  return (
    <div>
        <SideBar/>
        <div>
            <Outlet />
        </div>
    </div>
  )
}
