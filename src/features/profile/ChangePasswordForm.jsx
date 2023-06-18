import React from "react";
import ProfileInput from "./ProfileInput";
import InputErrorMessage from "../auth/components/inputErrorMessage";
import validatePassword from '../../features/auth/validators/validate-password'
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ChangePasswordForm() {
    const initialInput = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
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
          const result = validatePassword(input);
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
    <div className="flex flex-col gap-6 ">
        <div>
          <ProfileInput
            name="currentPassword"
            placeholder="Current Password"
            value={input.currentPassword}
            onChange={handleChangeInput}
            // isInvalid={error.firstName}
          />
          <div className="h-8">
            {error.currentPassword && <InputErrorMessage message={error.currentPassword} />}
          </div>
        </div>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <ProfileInput
            name="newPassword"
            placeholder="New Password"
            value={input.newPassword}
            onChange={handleChangeInput}
            // isInvalid={error.firstName}
          />
          <div className="">
            {error.newPassword && <InputErrorMessage message={error.newPassword} />}
          </div>
        </div>
        <div>
          <ProfileInput
            name="confirmPassword"
            placeholder="Confirm Password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            // isInvalid={error.lastName}
          />
          <div className="h-8">
            {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-black p-4  text-center text-lg"
      >
        CHANGE PASSWORD
      </button>
    </div>
    </form>
  );
}
