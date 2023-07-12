import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { wishlistAsync } from '../features/auth/slice/wishlist-slice';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import ProductWithModel from '../features/admin/products/ProductWithModel';
import FilterListWishlist from '../features/filter/FilterListWishlist';

export default function FavoritePage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(wishlistAsync(id))
  },[]) 

  const isLoading = useSelector(state=> state.wishlist.isLoading)
  const wish = useSelector(state=> state.wishlist.wishlistFilter)
  const numWish = wish.length;


  if (isLoading) {
    return <Loading /> }

  return (
    <div className='max-w-[1440px] min-h-[calc(100vh-100px)] mx-auto overflow-hidden border border-black border-y-0'>
        <FilterListWishlist numProduct={numWish}/>
        {wish.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 border-slate-600 overflow-auto">
                {wish.map((el) => (
                <ProductWithModel key={el.id} item={el.Product} wish={true} />
                ))}
            </div>
            ) : (
            <div className="flex justify-center text-xl text-gray-500 pt-72">
                No wishlist now
            </div>
        )}
    </div>
  )
}
