import React from 'react'
import { toast } from 'react-toastify';
import { Slide } from 'react-toastify';
import RegisterInput from './RegisterInput'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../slice/auth-slice';
import { FailIcon, SuccessIcon } from '../../../icons';
import InputErrorMessage from './inputErrorMessage';
import validateRegister from '../validators/validate-register';
import { HiEye } from "react-icons/hi";

const initialInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export default function RegisterForm({open, onClose}) {
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});
    const [isViewPassword, setIsViewPassword] = useState(false)
    const [isViewMatch, setIsViewMatch] = useState(false)
    const dispatch = useDispatch();

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setIsViewPassword(false)
        setIsViewMatch(false)
    };

    const handleIsView = () => {
        setIsViewPassword(!isViewPassword)
    }

    const handleIsViewMatch = () => {
        setIsViewMatch(!isViewMatch)
    }

    const handleSubmitForm = async e => {
        try {
          e.preventDefault();
          const result = validateRegister(input);
          if (result) {
            return setError(result);
          }
          setError({});
          await dispatch(registerAsync(input)).unwrap();
          toast.success('register successfully', {
            icon: <SuccessIcon />,
            className: "top-[96px]",
            transition: Slide
          });
          onClose()
          onSuccess();
        } catch (err) {
          toast.error(err,{
            icon: <FailIcon />,
            transition: Slide
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
                <div className='flex flex-col gap-4 text-base'>
                    <div className='flex justify-between group pb-4'>
                        <p>Create your accout below</p>
                        <div className='cursor-pointer flex gap-2 items-center' onClick={open}>
                            <p className="group hover:underline underline-offset-8">Back to login</p>
                        </div>
                    </div>    
                    <div>
                    <RegisterInput
                        name="email"
                        placeholder="Email address"
                        value={input.email}
                        onChange={handleChangeInput}
                        isInvalid={error.email}
                    />
                    <div className='h-8'> 
                        {error.email && (<InputErrorMessage message={error.email} />)}
                    </div>
                    
                    </div>

                    <div className='grid grid-cols-2 gap-12'>
                        <div className='relative'>
                            <RegisterInput
                                type={isViewPassword? 'text': 'password'}
                                name="password"
                                placeholder="Password"
                                value={input.password}
                                onChange={handleChangeInput}
                                isInvalid={error.password}
                            />
                            <div className='h-8'> 
                                {error.password && <InputErrorMessage message={error.password} />}
                            </div>  
                            {input.password.length > 0 ?
                                <div className='absolute top-3 right-2 text-lg cursor-pointer' onClick={handleIsView}>
                                    <HiEye />
                                </div> : <></>}
                        </div>
                        <div className='relative'>
                            <RegisterInput
                                type={isViewMatch? 'text': 'password'}
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={input.confirmPassword}
                                onChange={handleChangeInput}
                                isInvalid={error.confirmPassword}
                            />
                            <div className='h-8'> 
                                {error.confirmPassword && (<InputErrorMessage message={error.confirmPassword} />)}
                            </div>
                            {input.confirmPassword.length > 0 ?
                                <div className='absolute top-3 right-2 text-lg cursor-pointer' onClick={handleIsViewMatch}>
                                    <HiEye />
                                </div> : <></>}
                        </div>
                    </div> 

                    <div className='grid grid-cols-2 gap-12'>
                        <div>
                            <RegisterInput
                                name="firstName"
                                placeholder="First name"
                                value={input.firstName}
                                onChange={handleChangeInput}
                                isInvalid={error.firstName}
                            />
                            <div className='h-8'> 
                                {error.firstName && <InputErrorMessage message={error.firstName} />}
                            </div>
                        </div>
                        <div>
                            <RegisterInput
                            name="lastName"
                            placeholder="Last name"
                            value={input.lastName}
                            onChange={handleChangeInput}
                            isInvalid={error.lastName}
                            />
                            <div className='h-8'> 
                                {error.lastName && <InputErrorMessage message={error.lastName} />}
                            </div>
                        </div>
                    </div> 

                    <button type='submit' className='mt-6 p-3 text-white text-lg bg-black'>Register</button>

                </div>  
        </div>
    </form>
  )
}
