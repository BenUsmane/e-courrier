import React from 'react'
import { Link } from 'react-router-dom'

export default function Compagnie() {
  return (
<div className='flex'>
       <div className=''>
        <h1 className='ml-8 text-gl text-red-500'> Compagnie</h1>
        <Link to={'add'}>
        add Compagnie
        </Link>
       </div>
    </div>  )
}
