import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../utils/fetch';
import ProductItem from './ProductItem/ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        css={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
