import React from 'react'
import { Link } from 'react-router-dom'

export default function Courrier() {
  return (
<div className='flex bg-slate-50'>
       <div className=''>
        <h1 className='ml-8 text-gl text-white-500'> Courrier</h1>
        <table className='border-l-pink-50 border border-collapse'>
          <thead className='border-2 border-slate-50'>
            <tr>
              <td>Nom</td>
              <td>Prenom</td>
              <td>Numero</td>
              <td>Adress</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sylla</td>
              <td>Ousmane</td>
              <td>55566521</td>
              <td>Kamsar</td>
            </tr>
          </tbody>
        </table>
        <Link className='bg-white' to={'add'}>
        add courier
        </Link>
       </div>
    </div>  )
}
