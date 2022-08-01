import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { cartContext } from "../context/CartContextProvider";

//Icons
import cartIcon from "../asset/cart-shopping-solid.svg"

const Navbar = () => {

  const {cartState} = useContext(cartContext);

  return (
    <div>
      <Link to="/products" >Products</Link>      
      <div>
        <Link to="/cart" ><img src={cartIcon} alt="Cart" style={{width:"30px"}}/></Link>
        <span>{cartState.cartCount}</span>
      </div>
    </div>
  );
};

export default Navbar;