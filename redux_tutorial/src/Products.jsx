import React from 'react'
import { useSelector } from 'react-redux'
const Products = () => {
  const item = useSelector(state => state.productReducer.products);
  return (
    <div>
      {JSON.stringify(item)}
    </div>
  )
}

export default Products
