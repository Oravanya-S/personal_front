import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import RegisterForm from '../features/auth/components/RegisterForm'
import LoginForm from '../features/auth/components/LoginForm'
import Dropdown from '../components/Dropdown'
import Menu from './Menu'
import Loading from '../components/Loading'
import { toast } from 'react-toastify'
import { FailIcon } from '../icons'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { cartListAsync } from '../features/auth/slice/cart-slice'

export default function Navbar({bgColor = 'white', borderColor = "black"}) {
    
    const user = useSelector(state => state.auth.user);
    const cart = useSelector(state => state.cart.cartList);
    const isLoading = useSelector(state => state.cart.isLoading);
    const dispatch = useDispatch() 

    useEffect(() => {
      dispatch(cartListAsync(user?.id))
    },[user]) 

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

    const goToWishlist = () => {
      if(!user) {
        toast.error('Login before adding to wishlist',{
          icon: <FailIcon />,
          position: 'top-center',
          className: "top-[96px]"
        });
      } else {
        navigate(`/wishlist/${id}`)
      }
    }

    if(isLoading) {
      return <Loading />
    }

    return ( 
    <div className='sticky top-0 z-20'>
      {(role==1)? <></> : <div className='max-w-[1440px] relative mx-auto bg-white'>
        <div className={`z-${(openSignIn || openSignUp)? 20: 30} border border-y-0`}>
          <nav className={`pl-10 pr-14 flex justify-between items-center bg-${bgColor} h-[94px]`}>
              <div>
                <Link to='/' className='text-5xl font-bold'>MARIETTA</Link>
              </div>
              <Menu />
              <Modal open={openSignIn} onClose={(openSignUp)? closeSignUp : closeSignIn} z='20'>{(openSignUp)? <RegisterForm open={handleSignIn} onClose={closeSignUp}/> : <LoginForm open={handleSignUp} onClose={closeSignIn}/>}</Modal>
              <div className='flex gap-4 text-lg'>
                {user? <Dropdown user={user}/> : <div className='cursor-pointer' onClick={handleSignIn}><i className="fa-regular fa-user text-2xl text-black p-2 hover:underline"></i>Sign in</div>}
                <div className='cursor-pointer' onClick={goToWishlist}><i className="fa-regular fa-heart text-2xl text-black p-2"></i>Wishlist</div>
                <div className='cursor-pointer' onClick={goToCart}>
                  <div className='flex items-center relative'>
                    <i className="fa-solid fa-bag-shopping text-2xl text-black p-2"></i>
                    { cart.length > 0 && user && <div className='absolute -right-5 top-[16px] w-4 h-4 bg-red-600 rounded-full text-white text-[7px] flex items-center justify-center'>{cart.length}</div>}
                    <div className='pt-2'>Cart</div>
                  </div>
                </div>
              </div>
          </nav>
          <hr className='fixed w-full border-gray-300 top-0'/>
        </div>
      </div> }
    </div>
    )
  }


  