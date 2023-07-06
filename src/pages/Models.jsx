import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modelListWithBagTypeAsync } from "../features/auth/slice/model-slice";
import ProductWithModel from "../features/admin/products/ProductWithModel";

export default function Models() {
  const { modelId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(modelListWithBagTypeAsync(modelId));
  }, [modelId]);

  const product = useSelector((state) => state.model.modelListWithBagType);
  const numProduct = product.length;

  return (
    <div className="">
      <div className="max-w-[1440px] min-h-[calc(100vh-98px)] mx-auto overflow-hidden border border-black border-y-0">
        <div className="h-16 border-y border-black">
          <div className="flex h-full items-center justify-start px-12 cursor-pointer gap-2">
            <p>Filter</p>
            <p className="w-[18px] h-4 bg-black text-white rounded-full text-[10px] flex justify-center items-center">{numProduct}</p>
          </div>
        </div>
        {product.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  border-slate-600 overflow-auto border-spacing-0">
            {product.map((el) => (
              <ProductWithModel item={el} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center text-xl text-gray-500 py-24">
            No products match your selection
          </div>
        )}
      </div>
    </div>
  );
}
