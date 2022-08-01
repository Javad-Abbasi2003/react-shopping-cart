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

const Product = ({ data }) => {
  const { cartState, dispatch } = useContext(cartContext);

  return (
    <div>
      <img src={data.image} alt="img" style={{ width: "100px" }} />
      <h3>{shorten(data.title)}</h3>
      <p>{data.price} $</p>
      <div>
        <Link to={`/products/${data.id}`}>Details</Link>
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
  );
};

export default Product;
