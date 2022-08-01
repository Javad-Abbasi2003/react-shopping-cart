import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Context
import { productsContext } from "../context/ProductsContext";
import { cartContext } from "../context/CartContextProvider";

//Functions
import {  isInCart, quantityCount } from "../helper/functions";

//Icons
import trashIcon from "../asset/trash-solid.svg"
import plusIcon from "../asset/plus-solid.svg"
import minusIcon from "../asset/minus-solid.svg"

const Details = () => {
  const { cartState, dispatch } = useContext(cartContext);
  const id = useParams().id;
  const products = useContext(productsContext);

  const { image, title, description, category, price } = products[id - 1];
  const data = products[id - 1]

  return (
    <div>
      <img src={image} alt="product" style={{ width: "200px"}} />
      <div>
        <div>
          <Link to="/products">Back to shop</Link>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Category: {category}</p>
        </div>
        <div>
          <p>{price} $</p>
          <div>
          {isInCart(cartState, data.id) ?
            <button onClick={() => dispatch({type:"INCREASE", payload: data})}><img src={plusIcon} style={{width: "10px"}} alt="+" /></button>
          :
            <button onClick={() => dispatch({type:"ADD_ITEM", payload: data})}>Add to cart</button>
          }
          {quantityCount(cartState, data.id) && <span>{quantityCount(cartState, data.id)}</span>}
          {quantityCount(cartState, data.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: data})}><img src={minusIcon} style={{width: "10px"}} alt="-" /></button>}
          {quantityCount(cartState, data.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: data})}><img src={trashIcon} style={{width: "10px"}} alt="Remove" /></button>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
