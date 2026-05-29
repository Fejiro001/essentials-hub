import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CatalogDetails from "./pages/CatalogDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CartFAB from "./components/CartFAB";
import { useCartStore } from "./stores/cartStore";

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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/catalog/:productId" element={<CatalogDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {cart.length > 0 && <CartFAB />}
    </>
  );
}

export default App;
