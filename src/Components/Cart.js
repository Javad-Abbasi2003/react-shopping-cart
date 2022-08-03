import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { cartContext } from "../context/CartContextProvider";

//Components
import CartItem from "./shared/CartItem";

//Style
import Styles from "./Cart.module.css"

const Cart = () => {
  const { cartState, dispatch } = useContext(cartContext);

  return (
    <div className={Styles.container}>
      <div className={Styles.cartItemsContainer}>
        {cartState.selectedProducts.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
      </div>
      {cartState.cartCount > 0 && (
        <div className={Styles.totalsContainer}>
          <div className={Styles.totals}>
            <p className={Styles.totalItems}>Total items: <span className={Styles.totalItemsSpan}>{cartState.cartCount}</span></p>
            <p className={Styles.totalPayment}>Total payment: <span className={Styles.totalPaymentSpan}>{cartState.totalPrice}</span></p>
          </div>
          <div className={Styles.buttons}>
            <button onClick={() => dispatch({type:"CLEAR"})} className={Styles.clearBtn}>Clear</button>
            <button onClick={() => dispatch({type:"CHECKOUT"})} className={Styles.checkoutBtn}>Checkout</button>
          </div>
        </div>
      )}
      { cartState.cartCount === 0 && cartState.checkout && 
        <div className={Styles.checkedoutContainer}>
          <h2 className={Styles.checkedoutheader}>Checked out successfully</h2>
          <Link to="/products" className={Styles.checkedoutLink}>Buy more</Link>
        </div>
      }
      {cartState.cartCount === 0 && !cartState.checkout &&
        <div className={Styles.clearCartContainer}>
          <h2 className={Styles.clearCartheader}>Want to buy?</h2>
          <Link to="/products" className={Styles.clearCartLink}>Go To Shop</Link>
        </div>
      }
    </div>
  );
};

export default Cart;
