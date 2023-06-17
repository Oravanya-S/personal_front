import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FailIcon, SuccessIcon } from '../../../../icons';
import InputErrorMessage from '../inputErrorMessage';
import validateProfile from '../../../auth/validators/validate-profile'
import ProfileInput from './ProfileInput';

const initialInput = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
  

export default function ProfileForm({open, onClose}) {
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});
    const dispatch = useDispatch();

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async e => {
        try {
          e.preventDefault();
          const result = validateProfile(input);
          if (result) {
            return setError(result);
          }
          setError({});
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
                <div className='flex flex-col gap-4 text-base'>
                    <div>
                    <ProfileInput
                        name="email"
                        placeholder="Email address"
                        value={input.email}
                        onChange={handleChangeInput}
                        // isInvalid={error.emailOrMobile}
                    />
                    <div className='h-8'> 
                        {error.email && (<InputErrorMessage message={error.email} />)}
                    </div>
                    
                    </div>

                    <div className='grid grid-cols-2 gap-12'>
                        <div>
                            <ProfileInput
                                name="password"
                                placeholder="Password"
                                value={input.password}
                                onChange={handleChangeInput}
                                // isInvalid={error.password}
                            />
                            <div className='h-8'> 
                                {error.password && <InputErrorMessage message={error.password} />}
                            </div>  
                        </div>
                        <div>
                            <ProfileInput
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={input.confirmPassword}
                                onChange={handleChangeInput}
                                // isInvalid={error.confirmPassword}
                            />
                            <div className='h-8'> 
                                {error.confirmPassword && (<InputErrorMessage message={error.confirmPassword} />)}
                            </div>
                        </div>
                    </div> 

                    <div className='grid grid-cols-2 gap-12'>
                        <div>
                            <ProfileInput
                                name="firstName"
                                placeholder="First name"
                                value={input.firstName}
                                onChange={handleChangeInput}
                                // isInvalid={error.firstName}
                            />
                            <div className='h-8'> 
                                {error.firstName && <InputErrorMessage message={error.firstName} />}
                            </div>
                        </div>
                        <div>
                            <ProfileInput
                            name="lastName"
                            placeholder="Last name"
                            value={input.lastName}
                            onChange={handleChangeInput}
                            // isInvalid={error.lastName}
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

