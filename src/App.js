import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Shop from "./Components/Shop";
import Details from "./Components/Details";
import Navbar from "./Components/Navbar";

//Context
import ProductsContextProvider from "./context/ProductsContext";
import CartContextProvider from "./context/CartContextProvider";
import Cart from "./Components/Cart";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart /> } />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
