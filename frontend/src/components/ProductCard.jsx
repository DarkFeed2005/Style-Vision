
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <span className="text-blue-600 font-bold text-md">${product.price}</span>
    </div>
  );
}