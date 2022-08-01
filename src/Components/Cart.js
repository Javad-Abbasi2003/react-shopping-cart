import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { cartContext } from "../context/CartContextProvider";

//Components
import CartItem from "./shared/CartItem";

const Cart = () => {
  const { cartState, dispatch } = useContext(cartContext);
  console.log(cartState)
  return (
    <div>
      <div>
        {cartState.selectedProducts.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>
      {cartState.cartCount > 0 && (
        <div>
          <div>
            <p><span>Total items:</span> {cartState.cartCount}</p>
            <p><span>Total payment:</span> {cartState.totalPrice}</p>
          </div>
          <div>
            <button onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
            <button onClick={() => dispatch({type:"CHECKOUT"})}>Checkout</button>
          </div>
        </div>
      )}
      { cartState.cartCount === 0 && cartState.checkout && 
        <div>
          <h2>Checked out successfully</h2>
          <Link to="/products">Buy more</Link>
        </div>
      }
      {cartState.cartCount === 0 && !cartState.checkout &&
        <div>
          <h2>Want to buy?</h2>
          <Link to="/products">Go To Shop</Link>
        </div>
      }

    </div>
  );
};

export default Cart;
