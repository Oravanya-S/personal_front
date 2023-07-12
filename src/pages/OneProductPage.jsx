import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import { useEffect } from 'react';
import { productAsync } from '../features/auth/slice/model-slice';
import ProductWithModel from '../features/admin/products/ProductWithModel';
import { wishlistAllProductIdAsync } from '../features/auth/slice/wishlist-slice';

export default function OneProductPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user);
    const wishProductId = useSelector((state) => state.wishlist.productIdWishlist);

    useEffect(() => {
        dispatch(productAsync(id))
        if(user) dispatch(wishlistAllProductIdAsync(user.id))
    },[]) 

    const product = useSelector(state=> state.model.product)
    const isLoading = useSelector((state) => state?.model?.isLoading);

    console.log(product)

    if (isLoading) {
        return <Loading /> }

  return (
    <>
        <div className='max-w-[1440px] mx-auto min-h-[calc(100vh-94px)] border border-b-0'>
            <ProductWithModel item={product} wish={user && wishProductId.includes(product.id)}/>
        </div>
    </>
  )
}
  // const [detail, setDetail] = useState(false);
    // const [love, setLove] = useState(false)

    // const handleLove = (e) => {
    //   setLove(!love)
    // }
    // let fulfilLove = (love)? 'solid':'regular'
    
  // const handleDetail = () => {
  //   setDetail(!detail);
  // };

  // const handleCloseDetail = () => {
  //   setDetail(false);
  // };

{/* <div
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
      )} */}