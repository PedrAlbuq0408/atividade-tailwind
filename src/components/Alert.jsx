function Alert({ children, variant = "success" }) {
  const estilos = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
  }

  return (
    <div className={`p-4 border-l-4 rounded ${estilos[variant]}`}>
      {children}
    </div>
  )
}

export default Alert