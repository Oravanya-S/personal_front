import React from 'react'
import LoginInput from './LoginInput';
import { toast } from 'react-toastify';
// import validateLogin from '../validators/validate-login';
// import InputErrorMessage from './inputErrorMessage';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slice/auth-slice';
import { FacebookIcon, FailIcon, GoogleIcon, SuccessIcon } from '../../../icons';

const initialInput = {
  email: '',
  password: ''
};


export default function LoginForm({placeholder, value, onChange, name, isInvalid, open, onClose}) {
  
  const [input, setInput] = useState(initialInput);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
};

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      console.log(input)
      await dispatch(login(input)).unwrap();
      toast.success('login successfully', {
        icon: <SuccessIcon />
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
        <div>
          <LoginInput
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            // isInvalid={error.emailOrMobile}
          />
          {/* <InputErrorMessage message={error.emailOrMobile} /> */}
        </div>
        <div>
          <LoginInput
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            // isInvalid={error.password}
          />
          {/* <InputErrorMessage message={error.password} /> */}
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


