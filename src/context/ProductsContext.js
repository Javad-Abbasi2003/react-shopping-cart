import React, {useState, useEffect, createContext} from 'react';
import { fetchProducts } from "../services/api"

const productsContext = createContext()

const ProductsContext = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const getProducts = async() =>{
      setProducts(await fetchProducts())
    }
    getProducts()
  }, [])


  return (
    <productsContext.Provider value={products}>
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsContext;