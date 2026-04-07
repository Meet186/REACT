import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoader] = useState(false);

  const fetchdata = async () => {
    try {
      setLoader(true);

      const response = await axios.get(
        `https://fakestoreapiserver.reactbd.org/api/products/${id}`
      );

      // ✅ correct data extraction
      setProduct(response.data.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  // ✅ Loader
  if (loading) return <Loader />;

  // ✅ Safety check
//   if (!product) return <p className="text-center mt-10">No product found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300">
        
        {/* Image */}
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-72 object-cover"
          />

          {/* New Badge */}
          {product?.isNew && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          
          {/* Brand + Category */}
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-sm text-gray-500">
              {product?.brand || "Brand"}
            </h3>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              {product?.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold mb-2">
            {product?.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3">
            {product?.description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-black">
              ${product?.price}
            </span>

            {product?.oldPrice && (
              <span className="text-sm line-through text-gray-400">
                ${product?.oldPrice}
              </span>
            )}

            {product?.discountedPrice && (
              <span className="text-sm text-green-600">
                ${product?.discountedPrice}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="text-yellow-500 text-sm mb-2">
            {"⭐".repeat(product?.rating || 0)} ({product?.rating || 0})
          </div>

          {/* Sizes */}
          <div className="flex gap-2 mb-3">
            {product?.size?.map((s, index) => (
              <span
                key={index}
                className="border px-2 py-1 text-xs rounded hover:bg-black hover:text-white cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Stock */}
          <p className="text-xs text-gray-500 mb-3">
            Stock: {product?.stock || 0}
          </p>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;