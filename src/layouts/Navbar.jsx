import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import RegisterForm from '../features/auth/components/RegisterForm'
import LoginForm from '../features/auth/components/LoginForm'
import Dropdown from '../components/Dropdown'
import Menu from './Menu'
import { toast } from 'react-toastify'
import { FailIcon } from '../icons'
import { useNavigate } from 'react-router-dom'

export default function Navbar({bgColor = 'bg-transparent'}) {
    
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate()
    let id, firstName, role;
    if (user) {
      const {id: _id, firstName: _firstName, role: _role} = user 
        id = _id
        firstName = _firstName
        role = _role
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

    const goToCart = () => {
      if(!user) {
        toast.error('Login before add cart',{
          icon: <FailIcon />,
          position: 'top-center',
          className: "top-[96px]"
        });
      } else {
        navigate(`/carts/${id}`)
      }
    }

    return ( 
    <div>
      {(role==1)? "" : <div className='max-w-[1440px] relative z-20 mx-auto'>
        <div className={`sticky z-${(openSignIn || openSignUp)? 20: 30} border`}>
          <nav className={`flex justify-between px-10 items-center bg-${bgColor} h-24`}>
              <div>
                <Link to='/' className='text-5xl font-bold'>MARIETTA</Link>
              </div>
              <Menu />
              <Modal open={openSignIn} onClose={(openSignUp)? closeSignUp : closeSignIn} z='20'>{(openSignUp)? <RegisterForm open={handleSignIn} onClose={closeSignUp}/> : <LoginForm open={handleSignUp} onClose={closeSignIn}/>}</Modal>
              <div className='flex gap-4 text-lg'>
              {user? <Dropdown user={user}/> : <div className='cursor-pointer' onClick={handleSignIn}><i className="fa-regular fa-user text-2xl text-black p-2 hover:underline"></i>Sign in</div>}
              <a className='cursor-pointer'><i className="fa-regular fa-heart text-2xl text-black p-2"></i>Favorites</a>
              <div className='cursor-pointer' onClick={goToCart}><i className="fa-solid fa-bag-shopping text-2xl text-black p-2"></i>Cart</div>
              </div>
          </nav>
          <hr className='fixed w-full border-gray-300 top-0'/>
        </div>
      </div> }
    </div>
    )
  }


  