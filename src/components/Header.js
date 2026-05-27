import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import logo from "../media/logo.svg";
import UserProfileModal from "./UserProfileModal";
import { useAuthStore } from "../stores/authStore";

function Header(props) {
  const { setIsLoginModalOpen } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showProfileModal, setProfileModal] = useState(false);

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

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
              <div className="profile-container">
                <button
                  className="user-btn"
                  title="User Profile"
                  onClick={() => setProfileModal(!showProfileModal)}>
                  <span>{user?.name[0]}</span>
                </button>
                {showProfileModal && (
                  <UserProfileModal setProfileModal={setProfileModal} />
                )}
              </div>
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
              onClick={() => setMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
