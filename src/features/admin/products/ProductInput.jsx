import createClasses from '../../../utils/create-classes';

export default function ProductInput({
  placeholder,
  value,
  onChange,
  name,
  isInvalid
}) {
    const className = createClasses(
        "block border-b py-0 outline-none font-normal",
        isInvalid
          ? "border-b-red-500 focus:ring-red-300"
          : "border-b-gray-300 focus:border-b-blue-500 focus:ring-b-blue-300"
      );
  return (
    <div className='w-full flex items-center gap-4'>
      <p className=" text-gray-800 font-medium w-[60px]">{placeholder}:</p>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}