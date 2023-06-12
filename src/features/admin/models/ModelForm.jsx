import React, { useState } from "react";
import ModelInput from "./ModelInput";
import { useDispatch } from "react-redux";
import { createModel, productListAsync, updateModel } from "../../auth/slice/admin-slice";
import SelectBagType from "../components/SelectBagType";

export default function ModelForm({
  textConFirm,
  onIsAddMode,
  oldModel,
  nameType = "",
}) {
  const [name, setName] = useState(oldModel?.name || "");
  const [brand, setBrand] = useState(oldModel?.brand || "");
  const [meterial, setMeterial] = useState(oldModel?.meterial || "");
  const [description, setDescription] = useState(oldModel?.description || "");
  const [bagtypeId, setBagtypeId] = useState(oldModel?.bagTypeId || 1);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const validate = (text) => {
    if (text.trim() === "") {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeBrand = (e) => {
    setBrand(e.target.value);
  };

  const handleChangeMeterial = (e) => {
    setMeterial(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeBagtypeId = (e) => {
    console.log(e.target.value)
    setBagtypeId(e.target.value);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validName = validate(name);
    let validBrand = validate(brand);
    let validMeterial = validate(meterial);
    let validDesc = validate(description);
    console.log(name,brand,meterial,description,bagtypeId)

    if (validName && validBrand && validMeterial && validDesc && !oldModel) {
      await dispatch(
        createModel({
          "name": name,
          "brand": brand,
          "meterial": meterial,
          "description": description,
          "bagTypeId": bagtypeId
        })
      );
      onIsAddMode(false);
      await dispatch(modelListAsync())
      await dispatch(productListAsync())
      
    } else if(validName && validBrand && validMeterial && validDesc && oldModel) {
      await dispatch(
        updateModel(oldModel.id, {
          "name": name,
          "brand": brand,
          "meterial": meterial,
          "description": description,
          "bagTypeId": bagtypeId
        })
      );
      onIsAddMode(false);
      await dispatch(modelListAsync())
      await dispatch(productListAsync())
    } 
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col text-lg">
            <div className={`flex flex-col gap-6 text-lg p-4`}>
              <div className="flex justify-between gap-10">
                <ModelInput
                  placeholder="Model"
                  value={name}
                  onChange={handleChangeName}
                  name="name"
                />
                <ModelInput
                  placeholder="Brand"
                  value={brand}
                  onChange={handleChangeBrand}
                  name="brand"
                />
              </div>

              <div className="grid grid-cols-2 gap-10 items-center">
                <ModelInput
                  placeholder="Meterial"
                  value={meterial}
                  onChange={handleChangeMeterial}
                  name="meterial"
                />
                <SelectBagType onChangeBagtype={handleChangeBagtypeId} valueId={bagtypeId}/>
              </div>

              <div>
                <label
                  htmlFor="description"
                  class="block mb-2 text-gray-800 dark:text-white font-medium"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="3"
                  class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your product description..."
                  value={description}
                  onChange={handleChangeDescription}
                ></textarea>
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
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
