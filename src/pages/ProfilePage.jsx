import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileForm from "../features/profile/ProfileForm";
import { useState } from "react";
import ChangePasswordForm from "../features/profile/ChangePasswordForm";
import thai_provinces from '../dataThailand/thai_provinces.json'
import thai_amphures from '../dataThailand/thai_amphures.json'
import thai_tambons from '../dataThailand/thai_tambons.json'
import { useEffect } from "react";
import { fetchMe } from "../api/auth-api";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  const [isEditDetailMode, setIsEditDetailMode] = useState(false);
  const [isEditPasswordMode, setIsEditPasswordMode] = useState(false);

  let province, amphure, tambon, zip;
  if (user.province) {
    const selectedProvince = thai_provinces.find(el => el.id == user.province)
    province = selectedProvince.name_en
  }
  if (user.amphoe) {
    const selectedAmphoe = thai_amphures.find(el => el.id == user.amphoe)
    amphure = selectedAmphoe.name_en
  }
  if (user.tambon) {
    const selectedTambon = thai_tambons.find(el => el.id == user.tambon)
    tambon = selectedTambon.name_en
    zip = selectedTambon.zip_code
  }

  return (
    <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-96px)] border border-b-0 fade-in">
      <div className="p-12 pb-0">
        <div className="flex">
          <div className="w-1/5 text-xl font-medium">Hello,</div>
          <div className="w-4/5 text-xl font-medium">Personal details</div>
        </div>
        <hr className="border-black my-6" />
        <div className="flex text-lg">
          <div className="w-1/5">
            <div className="flex flex-col gap-6 my-3">
              <Link to={`/orders/${user.id}`}>Order History</Link>
              <Link to={`/profile/${user.id}`} className="font-semibold">
                Profile
              </Link>
            </div>
          </div>
          <div className="max-w-[800px] flex flex-col flex-1 my-3 gap-6">
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
                  <div className="text-base mt-3">
                    {user.addressLine || user.province ? (
                      <div className="flex flex-col gap-2">
                        <div>{user.addressLine}</div>
                        <div className="flex gap-2">
                          <div>{tambon}</div>
                          <div>{amphure}</div>
                          <div>{province}</div>
                          <div>{zip}</div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500">No address specified</p>
                    )}
                  </div>
                  <hr className="border-black my-3" />
                </>
              ) : (
                <ProfileForm
                  onClose={() => setIsEditDetailMode(!isEditDetailMode)}
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
                      setIsEditPasswordMode(true);
                      setIsEditDetailMode(false);
                    }}
                  >
                    Change password
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-6">
                {!isEditPasswordMode ? (
                  <p className="text-3xl text-gray-500">{"•".repeat(12)}</p>
                ) : (
                  <ChangePasswordForm
                    onClose={() => setIsEditPasswordMode(!isEditPasswordMode)}
                    user={user}
                  />
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
