import React, { useReducer, createContext } from "react";

export const cartContext = createContext();

const initialValues = {
  selectedProducts: [],
  totalPrice: 0,
  cartCount: 0,
  checkout: false,
};

const cartSum = (state) => {
  const cartCount = state.selectedProducts.reduce((total, product) => total + product.quantity, 0)
  const totalPrice = state.selectedProducts.reduce((totalP, product) => totalP + product.quantity * product.price, 0).toFixed(2)
  return {totalPrice, cartCount}
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.selectedProducts.find((item) => item.id === action.payload.id)
      ) {
        const newProductSelect = { ...action.payload, quantity: 1 };
        state.selectedProducts.push(newProductSelect);
      }
      return { ...state, selectedProducts: [...state.selectedProducts], ...cartSum(state) };

    case "REMOVE_ITEM":
      const newSelectedProduct = state.selectedProducts.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, selectedProducts: [...newSelectedProduct], ...cartSum(state) };

    case "INCREASE":
      const indexI = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[indexI].quantity++;
      return { ...state, ...cartSum(state) };

    case "DECREASE":
      const indexD = state.selectedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedProducts[indexD].quantity--;
      return { ...state, ...cartSum(state) };

    case "CHECKOUT":
      return {
        selectedProducts: [],
        totalPrice: 0,
        cartCount: 0,
        checkout: true,
      };

    case "CLEAR_CART":
      return {
        selectedProducts: [],
        totalPrice: 0,
        cartCount: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialValues);

  return (
    <cartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
