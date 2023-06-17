import React from 'react'

export default function Order({order}) {
    console.log(order)
  return (
    <>
        <div className='border'>
            <div className='flex justify-between'>
                <div>Order {order.id}</div>
                <div>{order.status}</div>
            </div>
        </div>
        <hr className="border-gray-400 my-2"/>
    </>
  )
}
