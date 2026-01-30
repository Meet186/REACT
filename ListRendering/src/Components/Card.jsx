const ProductCard = ({ product }) => {
  return (
    <div className="w-[300px] gap-3 border rounded-xl p-4 shadow-sm hover:shadow-lg transition bg-white">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain"
        />
      </div>
      {/* Title */}
      <h2 className="text-sm font-semibold mt-3 line-clamp-2">
        {product.title}
      </h2>
      {/* Rating */}
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          ⭐ {product.rating}
        </span>
        <span className="text-gray-500 text-xs">
          {product.reviews}
        </span>
      </div>
      {/* Price */}
      <div className="mt-3">
        <span className="text-xl font-bold">{product.price}</span>
        <span className="line-through text-gray-400 text-sm ml-2">
          {product.originalPrice}
        </span>
        <span className="text-green-600 text-sm ml-2 font-semibold">
          {product.discount}
        </span>
      </div>

      {/* Offers */}
      <div className="mt-3 text-sm text-gray-700 space-y-1">
        <p>💱 {product.offers.exchangeOffer}</p>
        <p>🏦 {product.offers.bankOffer}</p>
      </div>

      {/* Details */}
      <ul className="mt-3 text-xs text-gray-600 list-disc list-inside space-y-1">
        {product.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
