import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import ShippingInput from "./ShippingInput";
import { FailIcon, SuccessIcon } from "../../../icons";
import { cartListAsync, checkout } from "../../auth/slice/cart-slice";
import { useNavigate } from "react-router-dom";
import thai_provinces from "../../../dataThailand/thai_provinces.json";
import thai_amphures from "../../../dataThailand/thai_amphures.json";
import thai_tambons from "../../../dataThailand/thai_tambons.json";
import validateShipping from "../../auth/validators/validate-shipping";
import InputErrorMessage from '../../auth/components/inputErrorMessage';
import axios from '../../../api/axios';

const initialInput = {
  phone: "",
  address: "",
};

export default function ShippingForm({ item, user, totalPrice }) {
  const [input, setInput] = useState(initialInput);
  const [newAddress, setNewaddress] = useState(false)
  const [showCurrentAddress, setShowCurrentAddress] = useState(false)
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  let province, amphure, tambon, zip;
  if (user.province) {
    const selectedProvince = thai_provinces.find(
      (el) => el.id == user.province
    );
    province = selectedProvince.name_en;
  }
  if (user.amphoe) {
    const selectedAmphoe = thai_amphures.find((el) => el.id == user.amphoe);
    amphure = selectedAmphoe.name_en;
  }
  if (user.tambon) {
    const selectedTambon = thai_tambons.find((el) => el.id == user.tambon);
    tambon = selectedTambon.name_en;
    zip = selectedTambon.zip_code;
  }

  const currentAddress = (e) => {
    if (e.target.value === "current") {
      setInput({
        ...input,
        address: `${user.addressLine} ${tambon || ""} ${amphure || ""} ${
          province || ""
        } ${zip || ""}`,
      });
      setNewaddress(false)
      setShowCurrentAddress(true)
    } else {
      setInput({
        ...input,
        address: "",
      });
      setNewaddress(true)
      setShowCurrentAddress(false)
    }
  };

  const array = useSelector(state => state.cart.cartList)

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateShipping(input);
      if (result) {
        return setError(result);
      }
      setError({});

      const resultPayment = await axios.post(
        `http://localhost:8888/payment/create-payment/${user.id}`,
          
        {
          payload: item,
          result: input
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("resultPayment -------------------------->", resultPayment.session)
      window.location.replace(resultPayment.data.session.url);
        
      
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
        <div>
          <ShippingInput
            name="phone"
            placeholder="Phone"
            value={input.phone}
            onChange={handleChangeInput}
            />
          <div className="h-0">
            {error.phone && <InputErrorMessage message={error.phone} />}
          </div>
        </div>
          <div className="flex flex-col gap-4">
            {user.addressLine? <div className="flex gap-2" onChange={currentAddress}>
              <input type="radio" id="current" name="address" value="current"/>
              <label for="current">Current address</label>
            </div> : <></>}
            {showCurrentAddress? <div className="pl-[21px] text-gray-500">{input.address}</div> : <></>}
            <div className="flex gap-2" onChange={currentAddress}>
              <input type="radio" id="new" name="address" value="new"/>
              <label for="new">New address</label>
            </div>
            { newAddress? <div className="pl-[21px] -mt-4">
              <ShippingInput
                name="address"
                value={input.address}
                onChange={handleChangeInput}
              />
              <div className="h-0">
                {error.address && <InputErrorMessage message={error.address} />}
              </div>
            </div> : <></>}
            {(!showCurrentAddress && !newAddress)? <div className="h-0">
                {error.address && <InputErrorMessage message={error.address} />}
              </div> : <></>}
          </div>
          <button
            type="submit"
            className="text-white bg-black p-4 my-8 text-center text-lg"
            role="button"
          >
            PAYMENT
          </button>
      </form>
    </>
  );
}

