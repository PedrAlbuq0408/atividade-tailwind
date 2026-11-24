function Input({ placeholder, type = "text", variant = "default", value, onChange }) {
  const estilos = {
    default: "border-gray-300 focus:ring-blue-500",
    error: "border-red-500 focus:ring-red-500",
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${estilos[variant]}`}
    />
  )
}

export default Input