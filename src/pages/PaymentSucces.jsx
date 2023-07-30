import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as orderService from '../api/order-api';
import { Navigate } from 'react-router-dom'
import { cartListAsync, checkout } from '../features/auth/slice/cart-slice';
import { useSearchParams } from 'react-router-dom';

export default function PaymentSuccess() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
const check = async() => {
    const session_id = searchParams.get("session_id")
    const response = await orderService.checkPayment(session_id);
if (response.data.payment_status === "paid") {
    await dispatch(
        checkout({
          userId: user.id,
          status: "PAID",
          payment: "CREDIT CARD",
          phone: response.data.metadata.phone,
          address: response.data.metadata.address,
        })
    );
    await dispatch(cartListAsync(user?.id)).unwrap();
    navigate(`/orders/${user.id}`);
} else {
    
}
}
check()
    },[])
  return (
<></>
  )
}
