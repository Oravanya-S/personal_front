import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FailIcon, SuccessIcon } from '../../icons';
import InputErrorMessage from '../auth/components/inputErrorMessage';
import validateProfile from '../../features/auth/validators/validate-profile'
import ProfileInput from './ProfileInput';
import SelectProvince from './SelectProvince';
import SelectAmphure from './SelectAmphure';
import SelectTambon from './SelectTambon';
import { updateUser } from '../../api/user-api';
import { fetchMe } from '../../features/auth/slice/auth-slice'
  
export default function ProfileForm({open, onClose}) {
    const user = useSelector((state) => state?.auth?.user);
    const initialInput = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        addressLine: user?.addressLine || '',
        province: user?.province || '',
        amphoe: user?.amphoe || '',
        tambon: user?.tambon || '',
        zipcode: user?.zipcode || '',
    };
    
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});
    const dispatch = useDispatch();

    console.log(input)
    const handleChangeInput = e => {
        if(e.target.name === 'province') {
            setInput({ ...input, [e.target.name]: e.target.value, amphoe: '', tambon: '', zipcode: '' });
        }
        else if(e.target.name === 'amphoe') {
            setInput({ ...input, [e.target.name]: e.target.value, tambon: '', zipcode: '' });
        }
        else {
            setInput({ ...input, [e.target.name]: e.target.value});
        }
    };
    const handleChangeTambon = (id, zipcode) => {
        setInput({ ...input, tambon: id, zipcode: String(zipcode) });
    };
    console.log(error)

    const handleSubmitForm = async e => {
        try {
          e.preventDefault();
          const result = validateProfile(input);
          if (result) {
            return setError(result);
          }
          setError({});

          if (result) {
            return setError(result);
        }
        setError({});

        // onClose(false)
        await dispatch(updateUser(input)).unwrap()
        await dispatch(fetchMe()).unwrap()

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
                                isInvalid={error.firstName}
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
                            isInvalid={error.lastName}
                            />
                            <div className='h-8'> 
                                {error.lastName && <InputErrorMessage message={error.lastName} />}
                            </div>
                        </div>
                    </div> 

                    <div className='grid'>
                        <div>
                            <ProfileInput
                                name="addressLine"
                                placeholder="Address Line"
                                value={input.addressLine}
                                onChange={handleChangeInput}
                                isInvalid={error.addressLine}
                            />
                            <div className='h-8'> 
                                {error.addressLine && <InputErrorMessage message={error.addressLine} />}
                            </div>  
                        </div>
                    </div> 
                    <div className='flex flex-col gap-8'>
                        <div className='grid grid-cols-2 gap-12'>
                            <SelectProvince valueId={input.province} onChange={handleChangeInput}/>
                            <SelectAmphure provinceId={input.province || ''} valueId={input.amphoe} onChange={handleChangeInput}/>
                        </div>
                        <div className='grid grid-cols-2 gap-12'>
                            <SelectTambon amphureId={input.amphoe || ''} valueId={input.tambon} zipcode={input.zipcode} onChange={handleChangeTambon}/>
                        </div>
                        <button type='submit' className='text-white bg-black p-4  text-center text-lg my-3'>SAVE</button>
                        </div>
                    <hr className="my-3 border-black"/>
                </div>  
        </div>
    </form>
  )
}
