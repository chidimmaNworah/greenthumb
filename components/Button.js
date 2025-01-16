export default function Button({ label, onClick, type = "button", className }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 ${className}`}
      >
        {label}
      </button>
    );
  }
  