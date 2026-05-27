import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import logo from "../media/logo.svg";
import UserProfileModal from "./UserProfileModal";

function Header(props) {
  const { setIsLoginModalOpen, user, isAuthenticated, authMode, setAuthMode } =
    props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Essentials Hub Logo" />
            <h1 className="logo-text">Essentials Hub</h1>
          </Link>
          <nav className={isMenuOpen ? "menu-open" : ""}>
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  Cart
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="user-actions">
            <Link to="/cart" className="cart-btn" title="View Cart">
              <LuShoppingBag />
            </Link>
            {isAuthenticated ? (
              <button
                className="user-btn"
                title="User Profile"
                onClick={() => console.log("User profile clicked")}>
                <span>{user?.name[0]}</span>
              </button>
            ) : (
              <button
                className="login-btn"
                title="Login"
                onClick={() => setIsLoginModalOpen(true)}>
                Login
              </button>
            )}
            <button
              className="menu-btn"
              title="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>
      </header>
      {/* USER PROFILE MODAL */}
      <UserProfileModal user={user} setAuthMode={setAuthMode} />
    </>
  );
}

export default Header;
