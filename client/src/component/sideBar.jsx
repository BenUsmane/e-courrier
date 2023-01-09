import React from 'react'
import { NavLink } from 'react-router-dom'
import userLogo from '../assets/images/user.png'

export default function SideBar() {
  return (
    <div className="flex flex-col h-screen w-64  bg-blue-600 text-white fixed bottom-0 overflow-y-hidden ">
            {/* // logo icon and text  */}
            <div className="flex items-center justify-center h-20">
                <div className="flex justify-center items-center w-full py-4 mt-4 mb-2">
                    <h2 className='text-4xl'>E-Courrier</h2>
                </div>
            </div>
            {/* // nav links  */}
            <nav className="flex-1 overflow-y-auto">
                <ul className="py-4 pl-2 pr-2 space-y-2">
                    <li>
                        <NavLink className='text-white text-xl mt-11 ' to={'/dashboard'}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                    <NavLink className='text-white text-xl mt-11 pt-14' to={'/courrier'}>
                            Courriers
                        </NavLink>
                    </li>
                    <li>
                    <NavLink className='text-white text-xl mt-11 pt-14' to={'/contact'}>
                            Contacts
                        </NavLink>
                    </li>
                    <li>
                    <NavLink className='text-white text-xl mt-11 pt-14' to={'/compagnie'}>
                            Entreprise
                        </NavLink>

                    </li>
                    
                    <li>
                    <NavLink className='text-white text-xl mt-11 pt-14' to={'/setting'}>
                            <h2 className='w-5 h-5'>Parametre</h2>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* // user information  */}
            <div className="px-2  h-16">
                <div className="flex items-center">
                    <img className="w-10 h-10 mr-4 rounded-full" src={userLogo} alt="user avatar" />
                    <div>
                        <p className="font-semibold text-blue-50">Ousmane Sylla</p>
                        <p className="text-sm text-blue-100">Admin</p>
                    </div>
                </div>
            </div>
            {/* // signout button icon and text on the bottom  */}
            <div className="px-2 py-2 h-20 w-full">
                <button  className="flex items-center px-3 py-2 text-blue-100 transition-colors duration-200 w-full hover:text-white transform bg-red-900/50 rounded-md hover:bg-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span className="mx-2 font-medium">Deconexion</span>
                </button>
            </div>
        </div>
  )
}
