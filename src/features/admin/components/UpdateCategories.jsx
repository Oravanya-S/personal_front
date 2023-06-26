import AddBagType from "../bagtypes/AddBagType";
import BagList from "../bagtypes/BagList";
import AddColor from "../colors/AddColor";
import ColorList from "../colors/ColorList";

export default function UpdateCategories() {
  return (
    <div className="flex flex-col gap-6 mx-8">
        <div className='border rounded-lg flex flex-col max-h-[400px] w-full overflow-hidden p-4 bg-white'>
          <AddColor category="color" nameType="Color"/>
          <div className='overflow-auto mt-3 border-t'>
            <ColorList />
          </div>
        </div>

        <div className='border rounded-lg flex flex-col max-h-[400px] w-full overflow-hidden p-4 bg-white'>
          <AddBagType title="Bag Type" category="Type" nameType="Type" list=""/>
          <div className='overflow-auto mt-3 border-t'>
            <BagList /> 
          </div>
        </div>
    </div>
  )
}
