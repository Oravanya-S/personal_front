import { CloseIcon, SearchIcon } from "../../../icons";
import { useDispatch, useSelector } from "react-redux";
import { searchBagType } from "../../auth/slice/admin-slice";

export default function SearchBagTypeValue() {

    const className = "p-2 pl-[40px] rounded-md w-[250px] border-[0.5px]"
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state?.admin?.searchBagTypeValue);

    const handleChangeSearchValue = (e) => {
      dispatch(searchBagType(e.target.value))
    }

    const clearSearch = () => {
      dispatch(searchBagType(""))
    }
  return (
    <div className='w-full flex justify-end relative'>
      <div className="absolute right-[218px] top-2">
        <SearchIcon />
      </div>
      {searchValue ? <div className="absolute right-2 top-[10px] cursor-pointer" onClick={clearSearch}>
        <CloseIcon />
      </div> : <></>}
      <input
        type="text"
        className={className}
        placeholder="Search"
        value={searchValue}
        onChange={handleChangeSearchValue}
        name="bagtype"
      />
    </div>
  );
}