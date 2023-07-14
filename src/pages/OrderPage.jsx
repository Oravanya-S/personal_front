import React from 'react'
import SideBar from '../features/admin/layouts/SideBar'
import HeaderAdmin from '../features/admin/components/HeaderAdmin'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Order from '../features/admin/order/Order';
import { useEffect } from 'react';
import { orderListAllAsync } from '../features/auth/slice/order-slice';
import LoadingAdmin from '../components/LoadingAdmin';

export default function OrderPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderListAllAsync());
  }, []);

  const orderAll = useSelector((state) => state.order.orderListAll);
  const isLoading = useSelector((state) => state.order.isLoading);

  if (isLoading) {
    return <div className='flex justify-center'>
            <div className='w-[350px]'>
            </div>
            <div className='mt-[300px]'>
              <LoadingAdmin />
            </div>
          </div>
  }
  return (
    <div className='flex w-[1440px] border-[1px] border-t-0 mx-auto min-h-screen bg-gray-50'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full gap-6 flex-1 max-h-screen overflow-hidden'>
        <HeaderAdmin topic="Order Summary"/>
        <div className=''>
        <div className='bg-white mx-8 rounded-md pt-8 overflow-auto'>
            {orderAll.length == 0 ? (
            <div className="flex justify-center text-3xl text-gray-500 py-24">
            No order
            </div>
        ) :(
            <div className="px-6 max-h-[700px] overflow-auto">
            <div className="flex justify-end gap-3">
            <div className="text-xl font-medium">
                Total:
            </div>
            <div className="text-lg font-normal text-gray-600">
                {orderAll.length} Orders
            </div>
            </div>
            <hr className="border-black my-6"/>
            <div className="flex text-lg">
            <div className="flex flex-col gap-4 w-full my-3"> 
                {orderAll.map(el => <Order key={el.id} order={el}/>)}
            </div>
            </div>
        </div>
        )}
      </div>
      </div>
      </div>
    </div>
  )
}