import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CatalogDetails from "./pages/CatalogDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Header */}
      {/* Main */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/catalog/:id" element={<CatalogDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer */}
    </>
  );
}

export default App;

