import React from 'react'
import thai_tambon from '../../dataThailand/thai_tambons.json'
import { useState } from 'react';

export default function SelectTambon({ amphureId, valueId, zipcode, onChange}) {
    console.log("ddddddddd", thai_tambon)

    let tambons;
    if(amphureId) { 
        tambons = thai_tambon.filter(item => item?.amphure_id === +amphureId)
        // setInput({...input, zipcode: tambons[0]?.zip_code})
    }
    else tambons = []
    console.log("thaitambons", tambons)

  return (
    <>
        <div className="flex items-center gap-2">
            <label htmlFor="subDistrict" className="dark:text-white font-medium">
                Tambon:
            </label>
            <select
            className="w-full px-2 py-[2px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
            name="subDistrict"
            id="subDistrict"
            value={valueId}
            zipcode={zipcode}
            onChange={onChange}
            >
            <option disabled hidden value={""}>
                -------- Select --------
            </option>
            {tambons.map((el) =>
                el.id === valueId? (
                <option selected value={el.id} zipcode={el.zip_code} key={el.id}>
                    {el.name_en}
                </option>
                ) : (
                <option value={el.id} zipcode={el.zip_code} key={el.id}>
                    {el.name_en}
                </option>
                )
            )}
            </select>
        </div>
        <div className='flex items-center gap-2'>
            <label htmlFor="zipcode" className="dark:text-white font-medium w-[110px]">
                Zipcode:
            </label>
            <input
                type="text"
                className="w-full block border-b outline-none"
                disabled={true}
                placeholder=""
                value={zipcode}
                onChange={onChange}
                name="zipcode"
            />
        </div>
    </>
  )
}


// if(tambonId) {
//     const index = thai_tambon.findIndex(item => item?.id === +tambonId)
//     const zip = thai_tambon[index].zip_code
//     setInput({...input, zipcode: zip})
// } 