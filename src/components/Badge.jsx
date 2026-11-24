function Badge({ children, variant = "info" }) {
  const estilos = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
  }

  return (
    <span className={`px-2 py-1 text-xs font-bold rounded-full ${estilos[variant]}`}>
      {children}
    </span>
  )
}

export default Badge