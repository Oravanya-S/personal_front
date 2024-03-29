import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorForm from "./ColorForm";
import { deleteColor } from "../../auth/slice/admin-slice";
import ModalDeleteBox from "../../../components/ModalDeleteBox";

export default function ColorItem({ item, nameType }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isClickDeleteBox, setIsClickDeleteBox] = useState(false);
  const dispatch = useDispatch();
  const handleClickDeleteBox = () => {
    dispatch(deleteColor(item.id));
  };

  return (
    <div key={item.id}>
      {isEditMode ? (
        <ColorForm
          textConFirm={`Edit`}
          onIsAddMode={setIsEditMode}
          oldColor={item}
          nameType={nameType}
        />
      ) : (
        <div className="flex items-center gap-8 text-lg border-b px-3 h-[70px]">
          <div className="flex items-baseline gap-2">
            <p className="font-medium pt-[1px]">Group color:</p>
            <p className="min-w-[100px] px-[5px]">{item.GroupColor?.name}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-20 font-medium">Shade:</div>
            <div
              className="w-6 h-6 rounded-full border"
              style={{ backgroundColor: `${item.hexcode}` }}
            ></div>
          </div>

          <div className="flex items-center gap-2 flex-1">
            <label className="font-medium">Name {nameType}:</label>
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
