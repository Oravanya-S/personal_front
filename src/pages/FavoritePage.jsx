import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchProductWishlist, sortPriceWishlist, wishlistAsync } from '../features/auth/slice/wishlist-slice';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import ProductWithModel from '../features/admin/products/ProductWithModel';
import FilterListWishlist from '../features/filter/FilterListWishlist';
import { useMemo } from 'react';

export default function FavoritePage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(wishlistAsync(id))
    dispatch(searchProductWishlist({}))
    dispatch(sortPriceWishlist(""))
  },[]) 

  const isLoading = useSelector(state=> state.wishlist.isLoading)
  const wishAll = useSelector(state=> state.wishlist.wishlist)
  const wish = useSelector(state=> state.wishlist.wishlistFilter)

  const colorsAvailable = useMemo(() => {
    const groupColorIdAvailable = {}
    for(let el of wishAll) {
      if(groupColorIdAvailable.length === 11) break;
      const groupColorId = el.Product?.Color?.groupColorId
      if(!groupColorIdAvailable[groupColorId]) groupColorIdAvailable[groupColorId] = true
    }
    return groupColorIdAvailable
  }, [wish])
 
  const numWish = wish.length;

  if (isLoading) {
    return <Loading /> }

  return (
    <div className='max-w-[1440px] min-h-[calc(100vh-96px)] mx-auto overflow-hidden border-y-0 border fade-in'>
        <FilterListWishlist numProduct={numWish} colorsAvailable={colorsAvailable}/>
        {wish.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 border border-black overflow-auto">
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
