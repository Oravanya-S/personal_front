import React, { useEffect, useState } from "react";
import ProductInput from "./ProductInput";
import SelectGroupColor from "../components/SelectGroupColor";
import SelectColor from "../components/SelectColor";
import SelectModel from "../components/SelectModel";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct, productListAsync, modelListAsync } from "../../auth/slice/admin-slice";

export default function ProductForm({
    textConFirm,
    onIsAddMode,
    oldProduct,
    idModel,
    idModelName,
    nameType = "",
}) {

    const [modelId, setModelId] = useState(oldProduct?.modelId|| idModel);
    const [colorId, setColorId] = useState(oldProduct?.colorId || "");
    const [price, setPrice] = useState(oldProduct?.price || "");
    const [stock, setStock] = useState(oldProduct?.stock || "");
    const [image, setImage] = useState(oldProduct?.bagTypeId || 1);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleChangeStock = (e) => {
        setStock(e.target.value);
    };

    // const handleChangeModelId = (e) => {
    //     console.log(e.target.value)
    //     setModelId(e.target.value)
    // };

    const handleChangeColorId = (e) => {
        console.log(e.target.value)
        setColorId(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!oldProduct) {
           await dispatch(
              createProduct({
                "modelId": modelId,
                "colorId": colorId,
                "stock": stock ,
                "price": price,
                "image": ""
              })
            );
            onIsAddMode(false);
          } else if(oldProduct) {
            await dispatch(
              updateProduct(oldProduct.id, {
                "stock": stock ,
                "price": price,
                "image": ""
              })
            );
            onIsAddMode(false);
          }
      
          dispatch(productListAsync())
    }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col text-lg rounded-3xl">
          <div className="flex flex-col gap-1 text-lg rounded-3xl">
            <div className={`flex flex-col gap-8 text-lg p-4`}>
              <div className="grid grid-cols-2 gap-10">
                <div className="border w-full cursor-pointer">
                  <input type="file" accept="image/*" />
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex gap-4 w-full">
                    {oldProduct? 
                    (<div className="flex items-center gap-2">
                        {/* <p className="dark:text-white font-medium w-[60px]">Model:</p>
                        <span className='w-[120px]'>{oldProduct.Model.name}</span> */}
                    </div>)
                    : 
                    (
                    <div className="flex items-center gap-2">
                      <p className="dark:text-white font-medium w-[60px]">Model:</p>
                      <p>{idModelName}</p>
                    </div>)}
                  </div>

                  <div className="flex gap-4 w-full">
                    {oldProduct? 
                        (<div className="flex items-center gap-2">
                            <p className="dark:text-white font-medium w-[60px]">Color:</p>
                            <span className='w-6 h-6 rounded-full border' style={{backgroundColor: `${oldProduct.Color.hexcode}`}}></span>                  
                            <span className='w-[150px]'>{oldProduct.Color.name}</span>
                        </div>)
                        : <SelectColor onChangeColor={handleChangeColorId} valueId={colorId}/>}
                  </div>

                  <ProductInput
                  placeholder="Price"
                  value={price}
                  onChange={handleChangePrice}
                  name="price"
                  />

                  <ProductInput
                  placeholder="Stock"
                  value={stock}
                  onChange={handleChangeStock}
                  name="stock"
                  />    
                </div>
                
              </div>
              <div className="grid grid-cols-2 gap-10">
                <button
                  type="submit"
                  className="bg-black text-base text-white px-2 py-2 rounded-md border-[1px] border-black min-w-[60px] text-center"
                >
                  {textConFirm}
                </button>
                <div
                  className="px-2 py-2 rounded-md border-[1px] border-black text-base text-center"
                  role="button"
                  onClick={() => onIsAddMode(false)}
                >
                  cancel
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
