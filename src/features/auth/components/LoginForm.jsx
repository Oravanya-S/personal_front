import React from 'react'
import LoginInput from './LoginInput';
import { toast } from 'react-toastify';
import { HiEye } from "react-icons/hi";
import validateLogin from '../validators/validate-login';
import InputErrorMessage from './inputErrorMessage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMe, login } from '../slice/auth-slice';
import { FacebookIcon, FailIcon, GoogleIcon, SuccessIcon } from '../../../icons';
import { useSelector } from 'react-redux';

const initialInput = {
  email: '',
  password: ''
};


export default function LoginForm({open, onClose}) {
  const navigate = useNavigate()
  const [isView, setIsView] = useState(false)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setIsView(false)
  };

  const handleIsView = () => {
    setIsView(!isView)
  }

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        return setError(result);
      }
      setError({});
      await dispatch(login(input)).unwrap();
      toast.success('login successfully', {
        icon: <SuccessIcon />,
        className: "top-[96px]"
      });
      onClose()
      onSuccess();
    } catch (err) {
      toast.error(err,{
        icon: <FailIcon />
    })
    };
  }
  return (
    <form onSubmit={handleSubmitForm}>
    <div className="grid gap-12">
        <div>
            <p className='font-medium text-xl'>Welcome</p>            
            <hr className='border-1 border-black mt-6'/>
        </div>       
        <div className='flex justify-between'>
            <p>Please login below</p>
        </div> 
        <div className="grid gap-6">
        <div>
          <LoginInput
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            isInvalid={error.email}
          />
          <div className='h-8'>
            <InputErrorMessage message={error.email} />
          </div>
        </div>
        <div className='relative'>
          <LoginInput
            type={isView? 'text': 'password'}
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          <div className='h-8'>
            <InputErrorMessage message={error.password} />
          </div>
          {input.password.length > 0 ?
          <div className='absolute top-3 right-5 text-xl cursor-pointer' onClick={handleIsView}>
            <HiEye />
          </div> : <></>}
        </div>
        </div>
        <button type='submit' className='p-3 text-white text-lg bg-black'>Login</button>
        <div className='flex justify-center'>
            <p className='text-black'>- Or Sign in with-</p>
        </div>
        <div className='flex justify-between gap-4 text-xl'>
            <button type='button' className='w-full border-2 rounded-md p-2 hover:border-black flex justify-center items-center gap-2'><GoogleIcon/>Google</button>
            <button type='button' className='w-full border-2 rounded-md p-2 hover:border-black flex justify-center items-center gap-2'><FacebookIcon />Facebook</button>
        </div>
        <div className='mt-16 flex justify-center gap-2 items-center group'>
            <button type="button" className="group-hover" onClick={open}>Create new account</button> 
            <i className="fa-solid fa-arrow-right group-hover:translate-x-2 duration-500"></i>
        </div>            
    </div>
    </form>
  );
}


