import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import ShippingInput from './ShippingInput'
import { FailIcon, SuccessIcon } from '../../../icons';

const initialInput = {
    phone: '',   
    address: '',
};

export default function ShippingForm({item, user}) {
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});
    const dispatch = useDispatch();

    const [payment, setPayment] = useState(false)

    const validate = (text) => {
        if (text.trim() === "") {
          setError(true);
          return false;
        } else {
          setError(false);
          return true;
        }
    };

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
        if (validate(input.phone) && validate(input.address)) setPayment(true)
        else setPayment(false)
    };

    const handleSubmitForm = async e => {
        try {
          e.preventDefault();
          console.log("payyyy")
        //   await dispatch(registerAsync(input)).unwrap();
        //   toast.success('Order successfully', {
        //     icon: <SuccessIcon />
        //   });

        //   onSuccess();
        } catch (err) {
          toast.error(err,{
            icon: <FailIcon />
        });
        }
    };

  return (
    <form onSubmit={handleSubmitForm} className='flex flex-col gap-3 py-4'>
        <div className='grid grid-cols-2 gap-8'>
            <div>
                <p className="py-1 font-medium">First Name</p>
                <p className='w-full block py-2 outline-none'>{user.firstName}</p>
            </div>
            <div>
                <p className="py-1 font-medium">Last Name</p>
                <p className='w-full block py-2 outline-none'>{user.lastName}</p>
            </div>
        </div>
        <ShippingInput
                name="phone"
                placeholder="Phone"
                value={input.phone}
                onChange={handleChangeInput}
        />
        <ShippingInput
                name="address"
                placeholder="Address"
                value={input.address}
                onChange={handleChangeInput}
        />
        {payment? <button type='submit' className='text-white bg-black p-4 my-8 text-center text-lg' role='button'>PAYMENT</button> : <></>}
    </form>

    
  )
}
