import { useEffect, useState } from "react";
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

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    setIsAuthenticated(!!currentUser);
    setUser(currentUser);
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      {isLoginModalOpen && (
        <LoginModal
          setIsLoginModalOpen={setIsLoginModalOpen}
          authMode={authMode}
          setAuthMode={setAuthMode}
          setIsAuthenticated={setIsAuthenticated}
          setUser={setUser}
        />
      )}
      <Header
        user={user}
        setIsLoginModalOpen={setIsLoginModalOpen}
        setAuthMode={setAuthMode}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      />
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

