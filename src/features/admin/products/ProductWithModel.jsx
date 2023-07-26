import React, { useState } from "react";
import { BasketIcon, FailIcon, SuccessIcon } from "../../../icons";
import ProductDetail from "./ProductDetail";
import { useDispatch, useSelector } from "react-redux";
import { toast, Zoom } from "react-toastify";
import { addCart } from "../../auth/slice/cart-slice";
import { addFavorite } from "../../auth/slice/wishlist-slice";
import { useNavigate } from "react-router-dom";

export default function ProductWithModel({ item, wish }) {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()
  let user_id;
  if (isAuthenticated) {
    user_id = user?.id
  }

  const handleClickFavorite = async () => {
    if(!isAuthenticated) {
      toast.error('Login before adding to wishlist',{
        icon: <FailIcon />,
        position: 'top-center',
        className: "top-[96px] bg-black text-white"
      });
    }
    else {
      await dispatch(addFavorite({"userId": user_id, "productId": item.id}))
    }
  }

  const handleClickBasket = async () => {
    if(!isAuthenticated) {
      toast.error('Login before add cart',{
        icon: <FailIcon />,
        position: 'top-center',
        className: "top-[96px]",
      });
    }
    else {
      await dispatch(addCart({"userId": user_id, "productId": item.id, "Product": item  }))
      toast.success('Add cart already', {
        icon: <SuccessIcon />,
        position: 'top-center',
        className: "top-[96px]",
        
      });
    }
  };

  return (
    <div className="flex justify-center items-center relative border border-black border-t-0 border-l-0 group cursor-pointer h-fit">
      <p className="absolute bottom-3 right-4 text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        ฿ {item?.price}
      </p>
      <div className="flex gap-2 absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="w-7 h-7 rounded-full border"
          style={{ backgroundColor: `${item?.Color?.hexcode}` }}
        ></div>
        <p className="text-1xl pt-1">{item?.Model?.name}</p>
      </div>
      <div
        className="absolute top-0 right-1 text-black p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
        onClick={handleClickBasket}
      >
        <BasketIcon />
      </div>
      <div
        className="absolute top-[18px] left-4 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
        onClick={handleClickFavorite}
      >
        <i className={`${wish? "fa-solid":"fa-regular"} fa-heart text-3xl`}></i>
      </div>
      

      <img
        className="object-cover h-full block"
        src={item?.image || "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw70c09258/23E213BA001-3100-852_1_main.jpg?sw=475&sh=633&q=100"}
        alt="Bag"
        onClick={() => navigate(`/product/${item.id}`)}
      />
    </div>
  );
}
