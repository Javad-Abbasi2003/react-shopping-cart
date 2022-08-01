import React, { useContext } from 'react';

//Context
import { cartContext } from "../../context/CartContextProvider"

//Functions
import { shorten } from '../../helper/functions';

//Icons
import trashIcon from "../../asset/trash-solid.svg"
import plusIcon from "../../asset/plus-solid.svg"
import minusIcon from "../../asset/minus-solid.svg"

const CartItem = (props) => {

  const { dispatch } = useContext(cartContext);
  const {image, title, price, quantity} = props.data;

  return (
    <div>
      <img src={image} alt="product" style={{width:"200px"}} />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <span>{quantity}</span>
      <div>
        {quantity === 1 ? <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trashIcon} style={{width: "10px"}} alt="Remove" /></button>:
        <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}><img src={minusIcon} style={{width: "10px"}} alt="-" /></button>
        }
        <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}><img src={plusIcon} style={{width: "10px"}} alt="+" /></button>
      </div>
    </div>
  );
};

export default CartItem;