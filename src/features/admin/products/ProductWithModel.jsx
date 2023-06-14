import React, { useState } from "react";
import { BasketIcon, FailIcon } from "../../../icons";
import ProductDetail from "./ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addCart } from "../../auth/slice/cart-slice";

export default function ProductWithModel({ item }) {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const user = useSelector(state => state.auth.user)
  let user_id;
  if (isAuthenticated) {
    user_id = user.id
  }
  const [detail, setDetail] = useState(false);
  const handleDetail = () => {
    setDetail(!detail);
  };

  const handleCloseDetail = () => {
    setDetail(false);
  };

  const handleClickBasket = () => {
    if(!isAuthenticated) {
      toast.error('Login before add cart',{
        icon: <FailIcon />,
        position: 'top-center',
        className: "top-[96px]"
      });
    }
    else {
      console.log(item)
      console.log(user_id, item.id)
      dispatch(addCart({"userId": user_id, "productId": item.id, "Product": item  }))
    }

  };

  return (
    <div className="bg-red-50 flex justify-center items-center relative border-[0.5px] border-slate-600 border-collapse group cursor-pointer h-[500px]">
      <p className="absolute bottom-4 right-4 text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        ฿ {item.price}
      </p>
      <div className="flex gap-2 absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="w-7 h-7 rounded-full border"
          style={{ backgroundColor: `${item.Color.hexcode}` }}
        ></div>
        <p className="text-1xl pt-1">{item.Model.name}</p>
      </div>
      <div
        className="absolute top-0 right-1 text-black p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
        onClick={handleClickBasket}
      >
        <BasketIcon />
      </div>
      <div
        className="absolute top-5 left-4 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
        onClick={handleDetail}
      >
      <div className="relative">
        See detail
      </div>
      </div>
      {detail ? (
        <div className="absolute bg-white opacity-75 h-[70%] w-[75%]">
            <>
                <ProductDetail item={item.Model} onClose={handleCloseDetail}/>
            </>
        </div>
      ) : (
        ""
      )}

      <img
        className="object-cover h-full block"
        src="https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw70c09258/23E213BA001-3100-852_1_main.jpg?sw=475&sh=633&q=100"
        alt="Bag"
      />
    </div>
  );
}



  //   const [love, setLove] = useState(false)
  //   const handleLove = (e) => {
  //     setLove(!love)
  //     console.log(e.target.value)
  //   }
  //   let fulfilLove = (love)? 'solid':'regular'
{
  /* <i className={`fa-${fulfilLove} fa-heart text-3xl `} onClick={handleLove}></i> */
}
