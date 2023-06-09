import LoginInput from './LoginInput';
import validateLogin from '../validators/validate-login';
import InputErrorMessage from './inputErrorMessage';
// import useForm from '../../../hooks/useForm';
import { useDispatch } from 'react-redux';
// import { login } from '../slice/auth-slice';

export default function LoginForm({placeholder, value, onChange, name, isInvalid, open, onClose}) {
//   const { input, handleChangeInput, error, handleSubmitForm } = useForm(
//     {
//       email: '',
//       password: ''
//     },
//     validateLogin
//   );

//   const dispatch = useDispatch();

//   const onSubmit = async data => {
//     try {
//       await dispatch(login(data)).unwrap();
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    // <form onSubmit={handleSubmitForm(onSubmit)}>
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
            // value={input.emailOrMobile}
            // onChange={handleChangeInput}
            // isInvalid={error.emailOrMobile}
          />
          {/* <InputErrorMessage message={error.emailOrMobile} /> */}
        </div>
        <div>
          <LoginInput
            placeholder="Password"
            name="password"
            // value={input.password}
            // onChange={handleChangeInput}
            // isInvalid={error.password}
          />
          {/* <InputErrorMessage message={error.password} /> */}
        </div>
        <button className='p-3 text-white text-lg bg-black'>Login</button>
        <div className='flex justify-center'>
            <p className='text-black'>- Or Sign in with-</p>
        </div>
        <div className='flex justify-between gap-4 text-xl'>
            <button type='button' className='w-full border-2 rounded-md p-2 hover:border-black'><i className="fa-brands fa-google"></i> Google</button>
            <button type='button' className='w-full border-2 rounded-md p-2 hover:border-black'><i className="fa-brands fa-facebook text-blue-950"></i> Facebook</button>
        </div>
        <div className='mt-16 flex justify-center gap-2 items-center group'>
            <button type="button" className="group-hover" onClick={open}>Create new account</button> 
            <i className="fa-solid fa-arrow-right group-hover:translate-x-2 duration-500"></i>
        </div>            
    </div>
  );
}


