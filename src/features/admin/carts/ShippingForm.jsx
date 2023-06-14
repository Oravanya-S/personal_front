import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import ShippingInput from "./ShippingInput";
import { FailIcon, SuccessIcon } from "../../../icons";
import { checkout } from "../../auth/slice/cart-slice";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import Notification from "../../../components/Notification";

const initialInput = {
  phone: "",
  address: "",
};

export default function ShippingForm({ item, user, totalPrice }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payment, setPayment] = useState(true);

  const validate = (text) => {
    if (text.trim() === "") {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    if (validate(input.phone) && validate(input.address)) setPayment(true);
    else setPayment(false);
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await dispatch(
        checkout({
          userId: user.id,
          status: "PAID",
          payment: "POMPTPAY",
          phone: input.phone,
          address: input.address,
        })
      );
          navigate(`/history/${user.id}`)
        

      // toast.success('Order successfully', {
      //   icon: <SuccessIcon />
      // });

      //   onSuccess();
    } catch (err) {
      toast.error(err, {
        icon: <FailIcon />,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} className="flex flex-col gap-10 py-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="py-1 font-medium">First Name</p>
            <p className="w-full block py-2 outline-none">{user.firstName}</p>
          </div>
          <div>
            <p className="py-1 font-medium">Last Name</p>
            <p className="w-full block py-2 outline-none">{user.lastName}</p>
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
        {payment ? (
          <button
            type="submit"
            className="text-white bg-black p-4 my-8 text-center text-lg"
            role="button"
          >
            PAYMENT
          </button>
        ) : (
          <></>
        )}
      </form>
      {/* {payment ? 
      (<div className="overflow-hidden w-[60%] border border-black">
        <div className="flex flex-col ">
            <div className="bg-black h-[60px] text-white flex justify-center items-center">Order successfully</div>
            <button type="button" className="h-[100px] flex justify-center items-center">See your orders </button>

        </div>
      </div>)
      : <></>} */}
    </>
  );
}
