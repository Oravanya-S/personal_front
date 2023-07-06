import React, { useState, useRef } from "react";
import ProductInput from "./ProductInput";
import SelectColor from "../components/SelectColor";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  updateProduct,
} from "../../auth/slice/admin-slice";
import validateProduct from "../../auth/validators/validate-product";
import InputErrorMessage from "../../auth/components/inputErrorMessage";
import defaultImage from "../../../assets/default.jpg";
import Loading from "../../../components/Loading";
import { Clound } from "../../../icons";

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
    image: "",
  };
  const inputEl = useRef();
  const initialImage = oldProduct?.image || "";
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e) => {
    setInput({ ...input, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let result;
      if (input.image == "") result = validateProduct({...input, image: initialImage});
      else result = validateProduct(input);
      
      if (result) {
        return setError(result);
      }
      setError({});

      const formData = new FormData();
      if (input.image) formData.append("image", input.image);
      formData.append("modelId", input.modelId);
      formData.append("colorId", input.colorId);
      formData.append("price", input.price);
      formData.append("stock", input.stock);
      if (oldProduct) formData.append("id", oldProduct.id)

      if (!oldProduct) {
        setIsLoading(true)
        await dispatch(createProduct(formData));
        setIsLoading(false)
        await onIsAddMode(false);
      } else if (oldProduct) {
        setIsLoading(true)
        await dispatch(
          updateProduct(formData)
        );
        setIsLoading(false)
        onIsAddMode(false);
      }
    } catch (err) {
      console.log("Error create product", err);
    }
  };

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center border rounded-2xl my-2"
    >
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col text-md rounded-3xl">
          <div className="flex flex-col gap-1">
            <div className={`flex flex-col gap-8 p-8`}>
              <div className="grid grid-cols-2 gap-10">
                <div>
                <div
                  className="flex flex-col h-[350px] items-center justify-center overflow-hidden bg-[#fcf4ec] cursor-pointer font-normal"
                  onClick={() => inputEl.current.click()}
                >
                  <div className="flex flex-col gap-3 items-center">
                  <Clound />
                  <p className="text-gray-500">Click to upload</p>
                  <p className="text-gray-500 text-sm">SVG, PNG, JPG or GIF</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <input 
                      type="file"
                      className="hidden"
                      name="image"
                      ref={inputEl}
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          handleChangeImage(e);
                        }
                      }}
                    />
                    <div className="">
                      <img className=" object-center"
                        src={
                          input.image
                            ? URL.createObjectURL(input.image)
                            : initialImage
                        }
                      />
                    </div>
                  </div>      
                </div>
                <div className="pt-2 h-2 flex justify-center">
                  {error.image && (
                    <InputErrorMessage message={error.image} />
                  )}
                </div>
                </div>

                <div className="flex flex-col gap-4 w-full pl-10">
                  <div className="flex gap-4 w-full">
                    {oldProduct ? (
                      <div className="flex items-center gap-2">
                        <></>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 pt-8">
                        <p className="dark:text-white font-medium w-[60px]">
                          Model:
                        </p>
                        <p className="font-normal">{idModelName}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 w-full">
                    {oldProduct ? (
                      <div className="flex items-center gap-2 mb-2 pt-8">
                        <p className="dark:text-white font-medium w-[60px]">
                          Color:
                        </p>
                        <span
                          className="w-6 h-6 rounded-full border"
                          style={{
                            backgroundColor: `${oldProduct.Color.hexcode}`,
                          }}
                        ></span>
                        <span className="w-[150px] ">
                          {oldProduct.Color.name}
                        </span>
                      </div>
                    ) : (
                      <div className="pt-3">
                        <SelectColor
                          onChange={handleChangeInput}
                          valueId={input.colorId}
                        />
                        <div className="h-4 ml-[75px]">
                          {error.colorId && (
                            <InputErrorMessage message={error.colorId} />
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <ProductInput
                      placeholder="Price"
                      value={input.price}
                      onChange={handleChangeInput}
                      name="price"
                    />
                    <div className="h-4 ml-[75px]">
                      {error.price && (
                        <InputErrorMessage message={error.price} />
                      )}
                    </div>
                  </div>

                  <div>
                    <ProductInput
                      placeholder="Stock"
                      value={input.stock}
                      onChange={handleChangeInput}
                      name="stock"
                    />
                    <div className="h-4 ml-[75px]">
                      {error.stock && (
                        <InputErrorMessage message={error.stock} />
                      )}
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
