import React, { useContext } from 'react';

//Context
import { cartContext } from "../../context/CartContextProvider"

//Functions
import { shorten } from '../../helper/functions';

//Icons
import trashIcon from "../../asset/trash-solid.svg"
import plusIcon from "../../asset/plus-solid.svg"
import minusIcon from "../../asset/minus-solid.svg"

//Style
import Styles from "./CartItem.module.css"

const CartItem = (props) => {

  const { dispatch } = useContext(cartContext);
  const {image, title, price, quantity} = props.data;

  return (
    <div className={Styles.container}>
      <img src={image} alt="product"  className={Styles.image} style={{width:"200px"}} />
      <div className={Styles.detail}>
        <h3 className={Styles.title}>{shorten(title)}</h3>
        <p className={Styles.price}>{price} $</p>
      </div>
      <span className={Styles.quantity}>{quantity}</span>
      <div className={Styles.buttons}>
        {quantity === 1 ? <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})} className={Styles.removeItemBtn}><img src={trashIcon} style={{width: "10px"}} alt="Remove" /></button>:
        <button onClick={() => dispatch({type: "DECREASE", payload: props.data})} className={Styles.decreaseBtn}><img src={minusIcon} style={{width: "10px"}} alt="-" /></button>
        }
        <button onClick={() => dispatch({type: "INCREASE", payload: props.data})} className={Styles.increaseBtn}><img src={plusIcon} style={{width: "10px"}} alt="+" /></button>
      </div>
    </div>
  );
};

export default CartItem;