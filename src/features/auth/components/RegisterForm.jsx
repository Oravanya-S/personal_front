import React from 'react'
import RegisterInput from './RegisterInput'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const initialInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
  

export default function RegisterForm({placeholder, value, onChange, name, isInvalid, open, onClose}) {
  return (

    <form>
        <div className='flex flex-col gap-12 w-full'>
                <div>
                    <p className='font-medium text-xl'>Welcome</p>            
                    <hr className='border-1 border-black mt-6'/>
                </div>  
                <div className='flex flex-col gap-12 text-base'>
                    <div className='flex justify-between group'>
                        <p>Create your accout below</p>
                        <div className='cursor-pointer flex gap-2 items-center' onClick={open}>
                            <p className="group-hover:underline group hover:underline-offset-8">Back to login</p>
                        </div>
                    </div>    
                    <div>
                        <RegisterInput placeholder="Email"/>
                    </div>

                    <div className='grid grid-cols-2 gap-12'>
                        <RegisterInput placeholder="Password"/>
                        <RegisterInput placeholder="Confirm Password"/>
                    </div> 

                    <div className='grid grid-cols-2 gap-12'>
                        <RegisterInput placeholder="First Name"/>
                        <RegisterInput placeholder="Last Name"/>
                    </div> 

                    <div className='flex gap-4 items-center'>
                        <button type='button' className='w-5 h-5 border-[1px] border-black rounded-full hover:bg-black'></button>
                        <p>Subscribe to newsletter</p>
                    </div>

                    <button type='submit' className='p-3 text-white text-lg bg-black'>Register</button>
                </div>  
        </div>
    </form>
  )
}
