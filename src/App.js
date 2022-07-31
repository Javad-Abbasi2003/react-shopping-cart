import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Shop from "./Components/Shop";
import Details from "./Components/Details";

//Context
import ProductsContext from "./context/ProductsContext";

function App() {
  return (
    <ProductsContext>
      <Routes>
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </ProductsContext>
  );
}

export default App;
