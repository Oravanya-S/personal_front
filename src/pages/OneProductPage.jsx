import { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { productListWithModelAsync } from "../features/auth/slice/model-slice";
// import ProductWithModel from "../features/admin/products/ProductWithModel";
import {
  addFavorite,
  wishlistAllProductIdAsync,
} from "../features/auth/slice/wishlist-slice";
import { addCart } from "../features/auth/slice/cart-slice";
import { toast } from "react-toastify";
import { FailIcon, SuccessIcon } from "../icons";
import { useMemo } from "react";

export default function OneProductPage() {
  const { id, modelId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [currentId, setCurrentId] = useState(id);
  const wishProductId = useSelector((state) => state.wishlist.productIdWishlist);
  const itemsWithModel = useSelector((state) => state.model.productListWithModel);
  const currentProduct = useMemo(() => {
    return itemsWithModel?.find(item => item.id == currentId)
  }, [currentId, itemsWithModel])
  const [isAddCart, setAddCart] = useState(false);

  let user_id;
  if (isAuthenticated) {
    user_id = user?.id;
  }
  
  useEffect(() => {
    dispatch(productListWithModelAsync(modelId))
  }, [modelId]);
  
  useEffect(() => {
    if (user) {
      dispatch(wishlistAllProductIdAsync(user.id));
    }
  }, [user]);
  
  const isLoading = useSelector((state) => state?.model?.isLoading);

  const handleClickFavorite = () => {
    if (!isAuthenticated) {
      toast.warning("Login before adding to wishlist", {
        icon: <FailIcon />,
        position: "top-center",
        className: "top-[96px]",
      });
    } else {
      dispatch(addFavorite({ userId: user_id, productId: currentId }));
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
        addCart({ userId: user_id, productId: currentId, Product: currentProduct })
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
        addCart({ userId: user_id, productId: currentId, Product: currentProduct })
      );
      navigate(`/carts/${user_id}`);
    }
  };

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
                currentProduct?.image ||
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
                    {currentProduct?.Model?.name}
                  </div>
                  <div className="text-3xl font-semibold">฿ {currentProduct?.price}</div>
                </div>
                {/* <div className="text-[22px]">{item?.Model?.BagType?.name}</div> */}
                <div className="text-[20px] font-light text-gray-500">{currentProduct?.Model?.meterial}</div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-3">
                  <div>{currentProduct?.Color?.name}</div>
                  <div className="flex gap-4 items-center">
                  {itemsWithModel.map((item) =>
                  <>
                    <div className={`${currentProduct?.id===item?.id? "pt-[1px] border-b-[1px] border-b-black" : ""}`}>
                      <div
                        key={item.id}
                        className={`w-6 h-6 rounded-full mb-1 cursor-pointer ${item?.Color?.groupColorId===10? "border-[1px] border-gray-300": "border-0"}`}
                        style={{ backgroundColor: `${item?.Color?.hexcode}` }}
                        onClick={()=> setCurrentId(item.id)}
                      >
                      </div>
                    </div>
                  </>
                  )
                }
                  </div>
                </div> 
                <div onClick={handleClickFavorite}>
                  <i
                    className={`fa-${
                      user && wishProductId.includes(currentProduct?.id)
                        ? "solid"
                        : "regular"
                    } fa-heart text-3xl text-black p-2 pb-0 cursor-pointer`}
                  ></i>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-gray-500 text-[16px] font-light">
                <p>This is a collection of leather bags that incorporate added brand details at the zipper pull. These bags are designed to be lightweight, and the brand has enhanced the interior for comfortable, all-day shoulder carrying without any discomfort. The warm color tones make it easy for everyone to complement their daily outfits with these bags.</p>
                {/* <p>{item?.Model?.description}</p> */}
              </div> 

              <div className="flex flex-col gap-2 text-[17px]">
                {/* <p className="font-medium">Meterial</p> */}
                {/* <p className="">{item?.Model?.meterial}</p> */}
                <p className="">Size : 27.5 x 14.5 x 9 cm</p>
                <p className="">Shoulder strap length : 21.5 cm</p>
                <p className="text-gray-500 text-[16px] font-light">Free box, and card</p>
              </div>
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


  // const [stock, setStock] = useState(item.stock);
  // const decrease = () => {
    //   if (count > 1) setCount(count - 1);
    // };
    
    // const increase = () => {
      //   if (count < stock) setCount(count + 1);
      // };
      
      // const handleClickChangeColor = () => {
  //   setCurrentId()
  // }

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