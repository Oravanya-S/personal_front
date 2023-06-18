import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FailIcon, SuccessIcon } from '../../icons';
import InputErrorMessage from '../auth/components/inputErrorMessage';
import validateProfile from '../../features/auth/validators/validate-profile'
import ProfileInput from './ProfileInput';
  
export default function ProfileForm({open, onClose, user}) {
    
    const initialInput = {
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address || '',
    };
    
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

          onClose()

        } catch (err) {
          toast.error(err,{
            icon: <FailIcon />
        });
        }
      };

    return (

    <form onSubmit={handleSubmitForm}>
        <div className='flex flex-col gap-12 w-full'>
                <div className='flex flex-col gap-4 text-lg '>

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

                    <div className='grid'>
                        <div>
                            <ProfileInput
                                name="address"
                                placeholder="Address"
                                value={input.address}
                                onChange={handleChangeInput}
                                // isInvalid={error.password}
                            />
                            <div className='h-8'> 
                                {error.address && <InputErrorMessage message={error.address} />}
                            </div>  
                        </div>
                    </div> 
                    <button type='submit' className='text-white bg-black p-4  text-center text-lg'>SAVE</button>
                    <hr className="my-3 border-black"/>
                </div>  
        </div>
    </form>
  )
}


{/* <div>
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
                        </div> */}