import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupColourListAsync } from "../../auth/slice/admin-slice";
import { useEffect } from "react";
import LoadingAdmin from "../../../components/LoadingAdmin";
import GroupColourItem from "./GroupColourItem";

export default function GroupColourList() {
  const dispatch = useDispatch();
  const groupColor = useSelector((state) => state.admin.colourList);
  const isLoading = useSelector((state) => state.admin.isLoading);
  useEffect(() => {
    dispatch(groupColourListAsync());
  }, []);
  console.log(groupColor)

  if (isLoading) {
    return (
      <div>
        <LoadingAdmin />
      </div>
    );
  }

  return (
    <>
        <div className="flex flex-col gap-6">
          {groupColor.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <GroupColourItem item={item} />
            </div>
          ))}
        </div>
    </>
  );
}
