import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderListAsync } from "../features/auth/slice/order-slice";
import { useNavigate } from "react-router-dom";
import Order from "../features/admin/order/Order";
import { Link } from "react-router-dom";

export default function HistoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(orderListAsync(id));
  }, []);

  const order = useSelector((state) => state.order.orderList);

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen border">
      {order.length == 0 ? (
        <div className="flex justify-center text-3xl text-gray-500 py-24">
          No history
        </div>
      ) : (
        <div className="p-12">
          <div className="flex">
            <div className="w-1/6 text-xl font-medium">
              Hello,
            </div>
            <div className="w-5/6 text-xl font-medium">
              {order.length} Orders
            </div>
          </div>
          <hr className="border-black my-6"/>
          <div className="flex text-lg">
            <div className="w-1/6 cursor-pointer">
                <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <Link to={`/orders/${id}`} className='font-medium'>Order History</Link>
                    <Link to={`/profile/${id}`}>Profile</Link>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-5/6"> 
              {order.map(el => <Order key={el.id} order={el}/>)}
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
