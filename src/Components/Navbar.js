import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { cartContext } from "../context/CartContextProvider";

//Icons
import cartIcon from "../asset/cart-shopping-solid.svg"

//Style
import Styles from "./Navbar.module.css"

const Navbar = () => {

  const {cartState} = useContext(cartContext);

  return (
    <div className={Styles.container}>
      <Link to="/products" className={Styles.link} >Products</Link>      
      <div className={Styles.cartContainer}>
        <Link to="/cart" ><img src={cartIcon} alt="Cart" className={Styles.cartIcon} /></Link>
        <span className={Styles.cartCount}>{cartState.cartCount}</span>
      </div>
    </div>
  );
};

export default Navbar;