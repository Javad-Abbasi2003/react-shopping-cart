import React, { useContext } from 'react';

//Context
import { productsContext } from '../context/ProductsContext';

//Components
import Product from "./shared/Product"

const Shop = () => {
  const products = useContext(productsContext)

  return (
    <div>
      {products.map(product => <Product key={product.id} data={product} />)}
    </div>
  );
};

export default Shop;