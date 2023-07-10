import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileForm from "../features/profile/ProfileForm";
import { useState } from "react";
import ChangePasswordForm from "../features/profile/ChangePasswordForm";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const [isEditDetailMode, setIsEditDetailMode] = useState(false);
  const [isEditPasswordMode, setIsEditPasswordMode] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1440px] mx-auto h-[calc(100vh-98px)] border">
      <div className="p-12">
        <div className="flex">
          <div className="w-1/5 text-xl font-medium">Hello,</div>
          <div className="w-4/5 text-xl font-medium">Personal details</div>
        </div>
        <hr className="border-black my-6" />
        <div className="flex text-lg">
          <div className="w-1/5">
            <div className="flex flex-col gap-6 my-3">
              <Link to={`/orders/${user.id}`}>Order History</Link>
              <Link to={`/profile/${user.id}`} className="font-medium">
                Profile
              </Link>
            </div>
          </div>
          <div className="max-w-[750px] flex flex-col flex-1 my-3 gap-6">
            <div className="flex flex-col flex-1 gap-6">
              <div className="flex justify-between items-end">
                <p>{user.email}</p>
                {isEditDetailMode ? (
                  <div
                    className="cursor-pointer group hover:underline underline-offset-4 text-base"
                    onClick={() => setIsEditDetailMode(false)}
                  >
                    Cancel
                  </div>
                ) : (
                  <div
                    className="cursor-pointer group hover:underline underline-offset-4 text-base"
                    onClick={() => {
                      setIsEditDetailMode(true);
                      setIsEditPasswordMode(false);
                    }}
                  >
                    Edit details
                  </div>
                )}
              </div>
              {!isEditDetailMode ? (
                <>
                  <div className="flex gap-4">
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                  </div>
                  <div className="text-base">{(user.address)? user.address : <p className="text-gray-500">No address specified</p>}</div>
                  <hr className="border-black my-3" />
                </>
              ) : (
                <ProfileForm
                  onClose={() => setIsEditDetailMode(false)}
                  user={user}
                />
              )}
            </div>
            <div>
              <div className="flex justify-between items-end">
                <p>Password</p>
                {isEditPasswordMode ? (
                  <div
                    className="cursor-pointer group hover:underline underline-offset-4 text-base"
                    onClick={() => setIsEditPasswordMode(false)}
                  >
                    Cancel
                  </div>
                ) : (
                  <div
                    className="cursor-pointer group hover:underline underline-offset-4 text-base"
                    onClick={() => {
                      setIsEditPasswordMode(true)
                      setIsEditDetailMode(false)
                    }}
                  >
                    Edit password
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-6">
                {!isEditPasswordMode ? (
                  <p className="text-3xl text-gray-500">{"•".repeat(12)}</p>
                ) : (
                  <ChangePasswordForm 
                  onClose={() => setIsEditPasswordMode(false)}
                  user={user}/>
                )}
              </div>
            </div>
            <hr className="border-black my-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

