import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import RegisterForm from '../features/auth/components/RegisterForm'
import LoginForm from '../features/auth/components/LoginForm'

export default function Navbar({bgColor = 'bg-transparent'}) {
    const user = useSelector(state => state.auth.user);
    if (user) {
      const {id, firstName, role} = user
      console.log(id, firstName, role)
    } else {
      console.log("No login")
    }
    const [openSignIn, setOpenSignIn] = useState(false)
    const [openSignUp, setOpenSignUp] = useState(false)
    const handleSignIn = () => {
      setOpenSignUp(false)
      setOpenSignIn(true)
    }

    const handleSignUp = () => setOpenSignUp(true)
    
    const closeSignIn = () => setOpenSignIn(false)
    const closeSignUp = () => {
      setOpenSignIn(false)
      setOpenSignUp(false)
    }

    return (
      <div className={`sticky z-${(openSignIn || openSignUp)? 20: 30} border-b`}>
        <nav className={`flex justify-between w-screen px-12 items-center bg-${bgColor} h-24`}>
            <div>
            <a className='text-5xl font-bold'>MARIETTA</a>
            </div>
             
            <Modal open={openSignIn} onClose={(openSignUp)? closeSignUp : closeSignIn} z='20'>{(openSignUp)? <RegisterForm open={handleSignIn} onClose={closeSignUp}/> : <LoginForm open={handleSignUp} onClose={closeSignIn}/>}</Modal>
            <div className='flex gap-4'>
            {/* <a className='cursor-pointer'><i className="fa-solid fa-magnifying-glass text-2xl text-black p-2"></i>Search</a> */}
            <a className='cursor-pointer' onClick={handleSignIn}><i className="fa-regular fa-user text-2xl text-black p-2 hover:underline"></i>Sign in</a>
            <a className='cursor-pointer'><i className="fa-regular fa-heart text-2xl text-black p-2"></i>Favorites</a>
            <a className='cursor-pointer'><i className="fa-solid fa-bag-shopping text-2xl text-black p-2"></i>Bag</a>
            </div>
        </nav>
        <hr className='fixed w-full border-gray-300 top-0'/>
      </div>
    )
}