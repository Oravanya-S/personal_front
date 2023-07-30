import React from "react";
import ProfileInput from "./ProfileInput";
import InputErrorMessage from "../auth/components/inputErrorMessage";
import validatePassword from '../../features/auth/validators/validate-password'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { FailIcon, SuccessIcon } from "../../icons";
import { updatePassword } from "../auth/slice/auth-slice";

export default function ChangePasswordForm({open, onClose}) {
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

          await dispatch(updatePassword(input)).unwrap()
          toast.success('change password successfully', {
            icon: <SuccessIcon />,
            className: "top-[96px]"
          });
          onClose()
        } catch (err) {
          console.log(err)
          toast.error(err,{
            icon: <FailIcon />,
            className: "top-[96px]"
        });
        }
    };

  return (
    <form onSubmit={handleSubmitForm}>
    <div className="flex flex-col gap-3">
        <div>
          <ProfileInput
            name="currentPassword"
            placeholder="Current Password"
            value={input.currentPassword}
            onChange={handleChangeInput}
            isInvalid={error.currentPassword}
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
            isInvalid={error.newPassword}
          />
          <div>
            {error.newPassword && <InputErrorMessage message={error.newPassword} />}
          </div>
        </div>
        <div>
          <ProfileInput
            name="confirmPassword"
            placeholder="Confirm Password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            isInvalid={error.confirmPassword}
          />
          <div className="h-8">
            {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-black p-4 text-center text-lg"
      >
        CHANGE PASSWORD
      </button>
    </div>
    </form>
  );
}
