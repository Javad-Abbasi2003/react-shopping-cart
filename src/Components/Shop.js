import React, { useContext } from 'react';

//Context
import { productsContext } from '../context/ProductsContext';

//Components
import Product from "./shared/Product"

//Style
import Styles from "./Shop.module.css"

const Shop = () => {
  const products = useContext(productsContext)

  return (
    <div className={Styles.container}>
      {products.map(product => <Product key={product.id} data={product} />)}
    </div>
  );
};

export default Shop;