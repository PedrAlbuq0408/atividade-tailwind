function Card({ titulo, descricao }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="mb-2 text-xl font-bold text-gray-900">{titulo}</h2>
      <p className="text-gray-600">{descricao}</p>
    </div>
  )
}

export default Card