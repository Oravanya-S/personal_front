import React, { useEffect, useState } from "react";
import ProductInput from "./ProductInput";
import SelectColor from "../components/SelectColor";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct, productListAsync, modelListAsync } from "../../auth/slice/admin-slice";
import validateProduct from '../../auth/validators/validate-product';
import InputErrorMessage from '../../auth/components/inputErrorMessage';
import Loading from '../../../components/Loading';

export default function ProductForm({
    textConFirm,
    onIsAddMode,
    oldProduct,
    idModel,
    idModelName,
}) {

    const initialInput = {
      modelId: oldProduct?.modelId || idModel,
      colorId: oldProduct?.colorId || "",
      price: oldProduct?.price || "",
      stock: oldProduct?.stock || "",
      image: "tutu",
    };

    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleChangeInput = e => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = validateProduct(input);
        if (result) {
          return setError(result);
        }
        setError({});

        if (!oldProduct) {
           await dispatch(createProduct(input));
            onIsAddMode(false);
          } else if(oldProduct) {
            await dispatch(updateProduct(oldProduct.id, {...oldProduct, stock: input.stock , price: input.price, image: input.image}));
            onIsAddMode(false);
          }
      
    }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center border rounded-2xl my-2">
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col text-md rounded-3xl">
          <div className="flex flex-col gap-1">
            <div className={`flex flex-col gap-8 p-4`}>
              <div className="grid grid-cols-2 gap-10">
                
                  <div className="flex flex-col">
                  
                    <label htmlFor="dropzone-file" className="h-full flex items-center justify-center rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                
                    <div className='h-4 mx-auto '> 
                        {error.image && (<InputErrorMessage message={error.image} />)}
                    </div>
                  </div>
                

                <div className="flex flex-col gap-3 w-full">
                  <div className="flex gap-4 w-full">
                    {oldProduct? 
                    (<div className="flex items-center gap-2">
                        <></>
                    </div>)
                    : 
                    (
                    <div className="flex items-center gap-2">
                      <p className="dark:text-white font-medium w-[60px]">Model:</p>
                      <p className="font-normal">{idModelName}</p>
                    </div>)}
                  </div>

                  <div className="flex gap-4 w-full">
                    {oldProduct? 
                        (<div className="flex items-center gap-2 mb-2">
                            <p className="dark:text-white font-medium w-[60px]">Color:</p>
                            <span className='w-6 h-6 rounded-full border' style={{backgroundColor: `${oldProduct.Color.hexcode}`}}></span>                  
                            <span className='w-[150px] '>{oldProduct.Color.name}</span>
                        </div>)
                        : (<div className="flex gap-4 pt-1 pb-2">
                            <SelectColor onChange={handleChangeInput} valueId={input.colorId}/>
                            <div className='h-4'> 
                              {error.colorId && (<InputErrorMessage message={error.colorId} />)}
                            </div>
                          </div>)}
                  </div>
                  
                  <div>
                    <ProductInput
                    placeholder="Price"
                    value={input.price}
                    onChange={handleChangeInput}
                    name="price"
                    />
                    <div className='h-4 ml-[75px]'> 
                      {error.price && (<InputErrorMessage message={error.price} />)}
                    </div>
                  </div>
                  
                  <div>
                    <ProductInput
                    placeholder="Stock"
                    value={input.stock}
                    onChange={handleChangeInput}
                    name="stock"
                    />    
                    <div className='h-4 ml-[75px]'> 
                      {error.stock && (<InputErrorMessage message={error.stock} />)}
                    </div>
                  </div>
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
