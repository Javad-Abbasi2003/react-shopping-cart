import ProductsContext from "./context/ProductsContext";

import Shop from "./Components/Shop"

function App() {
  return (
    <ProductsContext className="App">
      <Shop />
    </ProductsContext>
  );
}

export default App;
