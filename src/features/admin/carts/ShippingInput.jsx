import createClasses from '../../../utils/create-classes';

export default function ShippingInput({
  placeholder,
  value,
  onChange,
  name,
}) {

  return (
    <div>
      <p className="py-1 font-medium">{placeholder}</p>
      <input
        type="text"
        className="w-full block border-b py-2 outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
