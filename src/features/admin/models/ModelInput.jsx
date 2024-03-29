import createClasses from '../../../utils/create-classes';

export default function ModelInput({
  placeholder,
  value,
  onChange,
  name,
}) {
    const className = createClasses(
        "w-full block border-b outline-none",
        "border-b-gray-300 focus:border-b-blue-500 focus:ring-b-blue-300"
      );
  return (
    <div className='w-full'>
      <p className="py-1 text-gray-800 font-medium">{placeholder}</p>
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
