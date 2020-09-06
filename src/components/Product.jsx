import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  
  return (
    <h4>Product Name</h4>
  )
}

export default Product;