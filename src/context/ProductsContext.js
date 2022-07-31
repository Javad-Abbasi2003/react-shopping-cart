import React, {useState, useEffect, createContext} from 'react';
import { fetchProducts } from "../services/api"

export const productsContext = createContext()

const ProductsContext = ({children}) => {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const getProducts = async() =>{
      setProducts(await fetchProducts())
    }
    getProducts()
  }, [])


  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContext;