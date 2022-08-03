import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//Context
import { productsContext } from "../context/ProductsContext";
import { cartContext } from "../context/CartContextProvider";

//Functions
import {  isInCart, quantityCount } from "../helper/functions";

//Icons
import trashIcon from "../asset/trash-solid.svg"
import plusIcon from "../asset/plus-solid.svg"
import minusIcon from "../asset/minus-solid.svg"

//Style
import Styles from "./Details.module.css"

const Details = () => {
  const { cartState, dispatch } = useContext(cartContext);
  const contextData = useContext(productsContext)

  const id = useParams().id;
  const [data, setData] = useState({})
  
  useEffect(() => {
    //if context has data uses that. otherwise will fetch required data
    if (!!contextData[id-1]) {
      setData(contextData[id-1])
    } else {
      const fetch = async () => {
        const result = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return result.data
      }
      
      const getData = async () => {
        setData(await fetch());
      }
      getData();
    }
    // eslint-disable-next-line
  }, [])

  const {image, title, description, price, category} = data

  return (
    <div className={Styles.container} >
      <img src={image} alt="product" className={Styles.Image} />
      <div className={Styles.nonImageContainer} >
        <div className={Styles.details} >
          <Link to="/products" className={Styles.shopLink} >Back to shop</Link>
          <h3 className={Styles.title} >{title}</h3>
          <p className={Styles.description} >{description}</p>
          <p className={Styles.category} >Category: <span className={Styles.categorySpan}>{category}</span></p>
          <p className={Styles.price} >{price} $</p>
        </div>
        <div className={Styles.buttons}>
          {quantityCount(cartState, data.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: data})} className={Styles.decreaseBtn}><img src={minusIcon} style={{width: "10px"}} alt="-" /></button>}
          {quantityCount(cartState, data.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: data})} className={Styles.removeItemBtn}><img src={trashIcon} style={{width: "10px"}} alt="Remove" /></button>}
          {quantityCount(cartState, data.id) && <span className={Styles.quantity}>{quantityCount(cartState, data.id)}</span>}
          {isInCart(cartState, data.id) ?
            <button onClick={() => dispatch({type:"INCREASE", payload: data})} className={Styles.increaseBtn}><img src={plusIcon} style={{width: "10px"}} alt="+" /></button>
          :
            <button onClick={() => dispatch({type:"ADD_ITEM", payload: data})} className={Styles.addToCartBtn}>Add to cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Details;
