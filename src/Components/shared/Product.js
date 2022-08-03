import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { cartContext } from "../../context/CartContextProvider";

//Functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

//Icons
import trashIcon from "../../asset/trash-solid.svg"
import plusIcon from "../../asset/plus-solid.svg"
import minusIcon from "../../asset/minus-solid.svg"

//Style
import Styles from "./Product.module.css"

const Product = ({ data }) => {
  const { cartState, dispatch } = useContext(cartContext);

  return (
    <div className={Styles.container}>
      <Link to={`/products/${data.id}`} className={Styles.productImageLink}><img src={data.image} alt="img" className={Styles.productImage} /></Link>
      <div className={Styles.nonImageContainer}>
        <h3 className={Styles.title}>{shorten(data.title)}</h3>
        <div className={Styles.priceContainer}>
          <span className={Styles.price}>{data.price} $</span>
        </div>
        <div className={Styles.bottomContainer}>
          <Link to={`/products/${data.id}`} className={Styles.detailsLink}>Details</Link>
          <div className={Styles.buttons}>
            {quantityCount(cartState, data.id) > 1 && <button onClick={() => dispatch({type:"DECREASE", payload: data})} className={Styles.decreaseBtn}><img src={minusIcon} alt="-" /></button>}
            {quantityCount(cartState, data.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: data})} className={Styles.removeItemBtn}><img src={trashIcon} alt="Remove" /></button>}
            {quantityCount(cartState, data.id) && <span className={Styles.quantity}>{quantityCount(cartState, data.id)}</span>}
            {isInCart(cartState, data.id) ?
              <button onClick={() => dispatch({type:"INCREASE", payload: data})} className={Styles.increaseBtn}><img src={plusIcon} alt="+" /></button>
              :
              <button onClick={() => dispatch({type:"ADD_ITEM", payload: data})} className={Styles.addToCartBtn}>Add to cart</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
