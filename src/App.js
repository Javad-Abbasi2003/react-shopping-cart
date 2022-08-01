import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Shop from "./Components/Shop";
import Details from "./Components/Details";

//Context
import ProductsContextProvider from "./context/ProductsContext";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
