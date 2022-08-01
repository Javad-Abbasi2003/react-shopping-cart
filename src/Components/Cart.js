import React, { useContext } from "react";

//Context
import { cartContext } from "../context/CartContextProvider";

const Cart = () => {
  const { cartState } = useContext(cartContext);

  return (
    <div>
      <p>count: {cartState.cartCount}</p>
      <p>price: {cartState.totalPrice}</p>
    </div>
  );
};

export default Cart;
