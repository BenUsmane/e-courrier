import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './sideBar'

export default function Layout() {
  return (
    <div>
        <SideBar className="flex w-full overflow-x-hidden bg-gray-50 overflow-y-hidden min-h-screen h-full"/>
        <div className="w-full md:ml-64 px-8 h-full">
            <Outlet />
        </div>
    </div>
  )
}
