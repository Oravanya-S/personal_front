import React from 'react'
import thai_provinces from '../../dataThailand/thai_provinces.json'

export default function SelectProvince({ valueId, onChange }) {
    console.log(thai_provinces)
  return (
    <div className="flex items-center gap-2">
        <label htmlFor="province" className="dark:text-white font-medium w-[85px]">
          Province:
        </label>
        <select
          className="w-full px-2 py-[2px] m-0 text-lg rounded-lg border border-gray-400 text-gray-700"
          name="province"
          id="province"
          value={valueId}
          onChange={onChange}
        >
          <option disabled hidden value={""}>
          --------  Select  --------
          </option>
          {thai_provinces.map((el) =>
            el.name_en === valueId ? (
              <option selected value={el.id} key={el.id}>
                {el.name_en}
              </option>
            ) : (
              <option value={el.id} key={el.id}>
                {el.name_en}
              </option>
            )
          )}
        </select>
    </div>

  )
}

  