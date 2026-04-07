import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading,setLoader] = useState(false);
    const fetchdata = async () => {
        setLoader(true);
        const response = await axios.get('https://fakestoreapiserver.reactbd.org/api/products');
   
        
        setProducts(response.data.data);
        setLoader(false);
    }
    useEffect(() => {
        fetchdata();
    }, [])
    // console.log(products);
    if(loading) return  <Loader/>;
    return (
        <>
            <div className="w-full mt-5 min-h-screen  px-2 sm:px-4 lg:px-6">
                <div className="
      w-full
      grid gap-6
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4
      xl:grid-cols-5
    ">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

            </div>
        </>
    )
}

const ProductCard = ({ product }) => {
    
    const navigate = useNavigate();
    console.log(product._id);
    
    
    const discountPercent = Math.round(
        ((product.oldPrice - product.discountedPrice) / product.oldPrice) * 100
    );

    return (
        <div onClick={()=> navigate(`/products/${product._id}`)}  className=" bg-gray-950 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group ">

            {/* Image */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />

                {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        NEW
                    </span>
                )}

                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{discountPercent}%
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-md font-semibold truncate">
                    {product.title}
                </h2>
                <p className="text-sm text-gray-500">{product.brand}</p>

                {/* Rating */}
                <div className="flex items-center mt-1 text-yellow-500 text-sm">
                    {"⭐".repeat(product.rating)}
                    <span className="text-gray-400 ml-2">
                        ({product.rating})
                    </span>
                </div>

                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold">
                        ₹{product.discountedPrice}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                        ₹{product.oldPrice}
                    </span>
                </div>

                {/* Sizes */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {product.size.map((s, i) => (
                        <span
                            key={i}
                            className="border px-2 py-1 text-xs rounded hover:bg-black hover:text-white cursor-pointer"
                        >
                            {s}
                        </span>
                    ))}
                </div>

                <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};


export default Products
