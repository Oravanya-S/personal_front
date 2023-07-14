import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { productAsync } from "../features/auth/slice/model-slice";
// import ProductWithModel from "../features/admin/products/ProductWithModel";
import {
  addFavorite,
  wishlistAllProductIdAsync,
} from "../features/auth/slice/wishlist-slice";
import { useState } from "react";
import { addCart } from "../features/auth/slice/cart-slice";
import { toast } from "react-toastify";
import { FailIcon, SuccessIcon } from "../icons";

export default function OneProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  let user_id;
  if (isAuthenticated) {
    user_id = user?.id;
  }
  const wishProductId = useSelector(
    (state) => state.wishlist.productIdWishlist
  );

  useEffect(() => {
    dispatch(productAsync(id));
  }, [id]);

  useEffect(() => {
    if (user) dispatch(wishlistAllProductIdAsync(user.id));
  }, [user]);

  const item = useSelector((state) => state.model.product);
  const isLoading = useSelector((state) => state?.model?.isLoading);
  const [isAddCart, setAddCart] = useState(false);
  const [stock, setStock] = useState(item.stock);

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleClickFavorite = () => {
    if (!isAuthenticated) {
      toast.warning("Login before adding to wishlist", {
        icon: <FailIcon />,
        position: "top-center",
        className: "top-[96px]",
      });
    } else {
      dispatch(addFavorite({ userId: user_id, productId: item.id }));
    }
  };

  const handleClickBasket = async () => {
    if (!isAuthenticated) {
      toast.error("Login before add cart", {
        icon: <FailIcon />,
        position: "top-center",
        className: "top-[96px]",
      });
    } else {
      await dispatch(
        addCart({ userId: user_id, productId: item.id, Product: item })
      );
      toast.success('Add cart already', {
        icon: <SuccessIcon />,
        className: "top-[96px]"
      });
      setAddCart(true);
    }
  };

  const handleClickBuynow = async () => {
    if (!isAuthenticated) {
      toast.error("Login before payment", {
        icon: <FailIcon />,
        position: "top-center",
        className: "top-[96px]",
      });
    } else {
      await dispatch(
        addCart({ userId: user_id, productId: item.id, Product: item })
      );
      navigate(`/carts/${user_id}`);
    }
  };

  console.log(item);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-96px)] border border-b-0">
        <div className="flex">
          <div className="w-1/2">
            <img
              className="object-cover w-full h-[calc(100vh-95px)] block"
              src={
                item?.image ||
                "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw70c09258/23E213BA001-3100-852_1_main.jpg?sw=475&sh=633&q=100"
              }
              alt="Bag"
            />
          </div>
          <div className="w-1/2 px-16 pt-20 text-xl">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <div className="text-3xl font-semibold">
                    {item?.Model?.name}
                  </div>
                  <div className="text-3xl font-semibold">฿ {item?.price}</div>
                </div>
                <div className="text-[22px]">{item?.Model?.BagType?.name}</div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: `${item?.Color?.hexcode}` }}
                  ></div>
                  <div>{item?.Color?.name}</div>
                </div>
                <div onClick={handleClickFavorite}>
                  <i
                    className={`fa-${
                      user && wishProductId.includes(item?.id)
                        ? "solid"
                        : "regular"
                    } fa-heart text-3xl text-black p-2 cursor-pointer`}
                  ></i>
                </div>
              </div>
              {/* <div className="flex justify-between items-end"> */}
              {/* <div className="flex items-end gap-5 flex-wrap">
                  <label
                    htmlFor="Quantity"
                    className="w-20 text-xl font-medium"
                  >
                    Quantity
                  </label>
                  <div className="flex items-center border border-gray-600 rounded-full">
                    <button
                      type="button"
                      className="w-10 h-8 text-lg font-semibold text-gray-600 transition hover:opacity-75"
                      onClick={decrease}
                    >
                      &minus;
                    </button>
                    <input
                      type="number"
                      id="Quantity"
                      value={count}
                      style={{ fontSize: "18px" }}
                      className="h-8 w-10 text-xl leading-5 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      type="button"
                      className="w-10 h-8 text-lg font-semibold text-gray-600 transition hover:opacity-75"
                      onClick={increase}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg text-gray-500">
                    {stock} pieces available
                  </p>
                </div> */}
              {/* </div> */}

              <div className="flex flex-col gap-3">
                <p className="font-medium">Meterial</p>
                <p className="">{item?.Model?.meterial}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-medium">Description</p>
                <p>{item?.Model?.description}</p>
              </div>

              {/* <SubDetails onOpen={onOpen}/> */}

              <div className="flex justify-between items-baseline gap-10">
                <button
                  className="p-4 bg-white text-black text-xl w-1/2 border-2 border-black font-medium"
                  onClick={handleClickBasket}
                >
                  ADD CART
                </button>
                <button
                  className="p-4 bg-black text-white text-xl w-1/2"
                  onClick={handleClickBuynow}
                >
                  BUY NOW
                </button>
              </div>
            </div>
            {isAddCart && (
              <div>
                <div className="py-6 flex items-center gap-2 group cursor-pointer">
                  <i className="fa-solid fa-arrow-left group-hover:-translate-x-2 duration-500"></i>
                  <button
                    type="button"
                    className="group-hover text-lg"
                    onClick={() => navigate(-1)}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <ProductWithModel item={product} wish={user && wishProductId.includes(product.id)}/> */
}

// const handleDetail = () => {
//   setDetail(!detail);
// };

// const handleCloseDetail = () => {
//   setDetail(false);
// };

{
  /* <div
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
                <ProductDetail item={item?.Model} onClose={handleCloseDetail}/>
            </>
        </div>
      ) : (
        ""
      )} */
}
