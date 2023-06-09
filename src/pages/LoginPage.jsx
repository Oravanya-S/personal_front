import React, { useState } from 'react'
import LoginForm from '../features/auth/components/LoginForm'
import RegisterForm from '../features/auth/components/RegisterForm'



export default function LoginPage() {
    // const [openSignIn, setOpenSignIn] = useState(false)
    const [openSignUp, setOpenSignUp] = useState(false)

    const handleSignIn = () => {
      setOpenSignUp(false)
    //   setOpenSignIn(true)
    }

    const handleSignUp = () => {
      setOpenSignUp(true)
    }

    // const closeSignIn = () => setOpenSignIn(false)
    const closeSignUp = () => {
    //   setOpenSignIn(false)
      setOpenSignUp(false)
    }

    return (
        <>
            <div className='mt-6'>
                {/* <div className='flex'>
                    <p className='font-medium text-xl w-1/3 pl-12'>Account</p>            
                    <p className='font-medium text-xl w-1/3'>Welcome</p>            
                </div> */}
        
                {/* <hr className='border-1 border-black mx-12 mt-4 mb-10'/> */}
                <div className='flex justify-center'>
                    <div className='w-1/3'>
                        {openSignUp? <RegisterForm onClose={closeSignUp}/> : <LoginForm open={handleSignUp}/>}
                    </div>
                </div>
            </div>
        </>
    )
}
    
  