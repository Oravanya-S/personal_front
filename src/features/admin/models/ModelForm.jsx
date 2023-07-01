import React, { useState } from "react";
import ModelInput from "./ModelInput";
import { useDispatch } from "react-redux";
import { createModel, modelListAsync, productListAsync, updateModel } from "../../auth/slice/admin-slice";
import SelectBagType from "../components/SelectBagType";
import validateModel from '../../auth/validators/validate-model';
import InputErrorMessage from '../../auth/components/inputErrorMessage';

export default function ModelForm({
  textConFirm,
  onIsAddMode,
  oldModel,
}) {

  const initialInput = {
    name: oldModel?.name || '',
    brand: oldModel?.brand || '',
    meterial: oldModel?.meterial || '',
    bagTypeId: oldModel?.bagTypeId || '',
    description: oldModel?.description || ''
  };

  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = validateModel(input);
    if (result) {
        return setError(result);
    }
    setError({});

    if (!oldModel) {
      await dispatch(createModel(input));
      onIsAddMode(false);
      
    } else if (oldModel) {
      await dispatch(updateModel(oldModel.id, {...oldModel, ...input}))
      onIsAddMode(false);
    } 
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col text-lg">
            <div className={`flex flex-col gap-6 text-lg p-6`}>
              <div className="flex justify-between gap-10">
                <div className="w-full">
                  <ModelInput
                    placeholder="Model"
                    value={input.name}
                    onChange={handleChangeInput}
                    name="name"
                  />
                  <div className='h-0 pb-2'> 
                    {error.name && (<InputErrorMessage message={error.name} />)}
                  </div>
                </div>
                <div className="w-full">
                  <ModelInput
                    placeholder="Brand"
                    value={input.brand}
                    onChange={handleChangeInput}
                    name="brand"
                  />
                  <div className='h-0 pb-2'> 
                    {error.brand && (<InputErrorMessage message={error.brand} />)}
                  </div>
                  </div>
                </div>

              <div className="grid grid-cols-2 gap-10 items-center">
                <div className="w-full">
                  <ModelInput
                    placeholder="Meterial"
                    value={input.meterial}
                    onChange={handleChangeInput}
                    name="meterial"
                  />
                  <div className='h-0 pb-2'> 
                    {error.meterial && (<InputErrorMessage message={error.meterial} />)}
                  </div>
                </div>
                <div className="w-full">
                  <SelectBagType onChange={handleChangeInput} valueId={Number(input.bagTypeId)}/>
                  <div className='h-0 ml-[88px] pb-2'> 
                    {error.bagTypeId && (<InputErrorMessage message={error.bagTypeId} />)}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 pt-2 text-gray-800 dark:text-white font-medium"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  className="block p-2.5 w-full text-gray-900 bg-[#fff] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your product description..."
                  value={input.description}
                  onChange={handleChangeInput}
                ></textarea>
                <div className='h-0 pb-4'> 
                    {error.description && (<InputErrorMessage message={error.description} />)}
                  </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
              {oldModel? <hr/> : <></>}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
