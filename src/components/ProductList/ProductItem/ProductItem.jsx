import React from 'react';
import { ProductCard, ProductImage } from './ProductItem.styled';

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <ProductImage src={product.img} alt={product.name} width={300} height={300} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Ціна: {product.price}</p>
    </ProductCard>
  );
};

export default ProductItem;
