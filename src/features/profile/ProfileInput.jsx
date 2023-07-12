import createClasses from '../../utils/create-classes';

export default function ProfileInput({
  placeholder,
  value,
  onChange,
  name,
  isInvalid
}) {
    const className = createClasses(
        "w-full", "block border-b py-1 outline-none",
        isInvalid
          ? "border-b-red-500 focus:ring-red-300"
          : "border-b-gray-300 focus:border-b-blue-500 focus:ring-b-blue-300"
      );
  return (
    <div>
      <p className="pb-2 text-gray-400">{placeholder}</p>
      <input
        type="text"
        className={className}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

