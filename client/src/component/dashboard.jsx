import React from 'react'
import SideBar from './sideBar'

export default function Dashboard() {
  return (

    <div className='flex'>
        <div className='w-1/2 h-full'>
        <SideBar/>
        </div>
       <div className=''>
        <h1 className='ml-8 text-gl text-red-500'> Dashboard</h1>
       </div>
    </div>
  )
}
