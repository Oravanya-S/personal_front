import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColourForm from "./ColourForm";
import { deleteColour } from "../../auth/slice/admin-slice";
import ModalDeleteBox from "../../../components/ModalDeleteBox";

export default function ColourItem({ item, groupColorId, nameType }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isClickDeleteBox, setIsClickDeleteBox] = useState(false);
  const dispatch = useDispatch();
  const handleClickDeleteBox = () => {
    dispatch(deleteColour(item.id, groupColorId));
  };

  return (
    <div key={item.id}>
      {isEditMode ? (
        <ColourForm
          textConFirm={`Edit`}
          onIsAddMode={setIsEditMode}
          oldColor={item}
          groupColorId={groupColorId}
          nameType={nameType}
        />
      ) : (
        <div className="flex items-center gap-16 text-lg h-[70px]">
          <div className="flex items-center">
            <div className="w-20 font-medium">Shade:</div>
            <div
              className="w-6 h-6 rounded-full border"
              style={{ backgroundColor: `${item.hexcode}` }}
            ></div>
          </div>

          <div className="flex items-center gap-2 flex-1">
            <label className="font-medium">Name:</label>
            <div className="pb-[1px]">
              <p>{item.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsEditMode(true);
              }}
            >
              <i className="fa-solid fa-pen text-black cursor-pointer"></i>
            </div>
            <div onClick={() => setIsClickDeleteBox(true)}>
              <i className="fa-regular fa-trash-can text-2xl text-black p-2 cursor-pointer"></i>
            </div>
          </div>
        </div>
      )}
      {isClickDeleteBox ? 
        <ModalDeleteBox 
            open={isClickDeleteBox}
            onClose={()=> setIsClickDeleteBox(false)}
            confirm={handleClickDeleteBox}
        />
        : 
        <></>}
    </div>
  );
}
