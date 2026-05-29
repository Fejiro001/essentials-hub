import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { useCartStore } from "./stores/cartStore";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CatalogDetails from "./pages/CatalogDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CartFAB from "./components/CartFAB";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <ScrollToTop />
      <Toaster position="top-right" richColors closeButton duration={2000} />
      {isLoginModalOpen && (
        <LoginModal
          setIsLoginModalOpen={setIsLoginModalOpen}
          authMode={authMode}
          setAuthMode={setAuthMode}
        />
      )}
      <Header setIsLoginModalOpen={setIsLoginModalOpen} />
      {/* Main */}
      <AnimatePresence mode="sync">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route
            exact
            path="/catalog/:productId"
            element={<CatalogDetails />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      {cart.length > 0 && <CartFAB />}
    </>
  );
}

export default App;
