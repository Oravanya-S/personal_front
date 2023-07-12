import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cartListAsync } from '../features/auth/slice/cart-slice';
import CartItem from '../features/admin/carts/CartItem'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

export default function CartPage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(cartListAsync(id))
  },[]) 


  let totolAmount, sumPrice;

  const cart = useSelector(state=> state.cart.cartList)
  const isLoading = useSelector((state) => state?.cart?.isLoading);

  if(cart.length > 0) {
    totolAmount = cart.reduce((acc,el)=>{
      acc+=el?.quantity
      return acc
    },0)
  
    sumPrice = cart.reduce((acc,el)=>{
      acc+=el?.quantity * el?.Product.price
      return acc
    },0)
  }

  if (isLoading) {
    return <Loading /> }
  return (
    <div className='max-w-[1440px] mx-auto min-h-[calc(100vh-94px)] border border-y-0'>
    { (cart.length==0)? <div className='flex justify-center text-xl text-gray-500 py-24'>No cart now</div> : 
    <div className='flex'>
      <div className='w-[60%] items-center'>
        <div className='flex flex-col'>
          {cart.map(item => <div className='flex flex-col' key={item.id}><CartItem item={item}/></div>)}
        </div>
      </div>
      <div className='flex flex-col w-[40%] border p-10 gap-8 '>
        <div className='text-xl font-medium'>Order Summary</div>
        <div className='flex gap-3'>
          <div className='text-gray-500'>{cart.length} items</div>
          <div className='text-gray-500'>({totolAmount} {(totolAmount > 1)? "pieces": "piece"})</div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <p className='font-medium text-xl'>Total</p>
            <p className='text-gray-500'>VAT included</p>
          </div>
          <div className='text-3xl font-semibold'>฿ {sumPrice}</div>
        </div>
        <div className='text-white bg-black p-4 text-center text-lg' role='button' onClick={ ()=> navigate(`/payment/${id}`)}>CHECKOUT</div>
      </div>
    </div>
    }
      <div className='px-12 py-6 flex items-center gap-2 group cursor-pointer'>
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-2 duration-500"></i>
            <button type="button" className="group-hover" onClick={ ()=> navigate(-1)}>Continue Shopping</button> 
      </div> 
    </div>
  )
}