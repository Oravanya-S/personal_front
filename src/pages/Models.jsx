import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modelListWithBagTypeAsync, searchProduct, sortPrice } from "../features/auth/slice/model-slice";
import ProductWithModel from "../features/admin/products/ProductWithModel";
import FilterList from "../features/filter/filterList";
import Loading from "../components/Loading";
import { wishlistAllProductIdAsync } from "../features/auth/slice/wishlist-slice";

export default function Models() {
  const { modelId } = useParams();
  const dispatch = useDispatch();
  
  const product = useSelector((state) => state.model.modelListWithBagTypeFilter);
  const user = useSelector((state) => state.auth.user);
  const wishProductId = useSelector((state) => state.wishlist.productIdWishlist);
  
  useEffect(() => {
      dispatch(modelListWithBagTypeAsync(modelId));
      dispatch(searchProduct({}))
      dispatch(sortPrice(""))
      if(user) dispatch(wishlistAllProductIdAsync(user.id))
  }, [modelId]);
  

  const isLoading = useSelector((state) => state?.model?.isLoading);
  const numProduct = product.length;

  if (isLoading) {
    return <Loading /> }
  return (
    <div className="flex justify-center fade-in max-w-[1440px] min-h-[calc(100vh-96px)] mx-auto">
      <div className="flex justify-center overflow-hidden border-y-0 border flex-wrap w-full">
            <FilterList numProduct={numProduct}/>
        {product.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-16 border border-black overflow-auto">
            {product.map((el) => (
              <ProductWithModel item={el} key={el.id} wish={user && wishProductId.includes(el.id)}/>
            ))}
          </div>
        ) : (
          <div className="flex justify-center text-xl text-gray-500 pt-72">
            No products match your selection
          </div>
        )}
      </div>
    </div>
  );
}
