import React from 'react'
import { toast } from 'react-toastify';
import RegisterInput from './RegisterInput'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../slice/auth-slice';
import { FailIcon, SuccessIcon } from '../../../icons';

const initialInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
  

export default function RegisterForm({placeholder, value, onChange, name, isInvalid, open, onClose}) {
    const [input, setInput] = useState(initialInput);
    
    const dispatch = useDispatch();

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async e => {
        try {
          e.preventDefault();
        //   const result = validateRegister(input);
        //   if (result) {
        //     return setError(result);
        //   }
        //   setError({});
          await dispatch(registerAsync(input)).unwrap();
          toast.success('register successfully', {
            icon: <SuccessIcon />
          });
          onClose()
          onSuccess();
        } catch (err) {
          toast.error(err,{
            icon: <FailIcon />
        });
        }
      };

    return (

    <form onSubmit={handleSubmitForm}>
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
                    <RegisterInput
                        name="email"
                        placeholder="Email address"
                        value={input.email}
                        onChange={handleChangeInput}
                        // isInvalid={error.emailOrMobile}
                    />
                    </div>

                    <div className='grid grid-cols-2 gap-12'>
                    <RegisterInput
                        name="password"
                        placeholder="Password"
                        value={input.password}
                        onChange={handleChangeInput}
                        // isInvalid={error.password}
                    />
                    <RegisterInput
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={input.confirmPassword}
                        onChange={handleChangeInput}
                        // isInvalid={error.confirmPassword}
                    />
                    </div> 

                    <div className='grid grid-cols-2 gap-12'>
                    <RegisterInput
                        name="firstName"
                        placeholder="First name"
                        value={input.firstName}
                        onChange={handleChangeInput}
                        // isInvalid={error.firstName}
                    />
                    <RegisterInput
                        name="lastName"
                        placeholder="Last name"
                        value={input.lastName}
                        onChange={handleChangeInput}
                        // isInvalid={error.lastName}
                    />
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
