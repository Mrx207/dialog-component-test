export default function DialogButton({ label, onClick, color = 'primary' }) {
  const colorClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  return (
    <button
      className={`px-4 py-2 rounded transition ${colorClasses[color]} focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
