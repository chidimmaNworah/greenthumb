export default function FormInput({ label, type, name, value, onChange }) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
    );
  }
  