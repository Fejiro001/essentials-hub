import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import logo from "../media/logo.svg";
import UserProfileModal from "./UserProfileModal";
import { useAuthStore } from "../stores/authStore";
import { useCartStore } from "../stores/cartStore";
import { useOutsideClick } from "../hooks/useOutsideClick";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/catalog", label: "Catalog" },
  { to: "/cart", label: "Cart" }
];

function Header(props) {
  const { setIsLoginModalOpen } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showProfileModal, setProfileModal] = useState(false);
  const loginRef = useRef();

  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const cartCount = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  useOutsideClick(loginRef, () => {
    setMenuOpen(false);
  });

  return (
    <>
      <header>
        <div className="container header-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Essentials Hub Logo" />
            <h1 className="logo-text">Essentials Hub</h1>
          </Link>
          <nav className={isMenuOpen ? "menu-open" : ""}>
            <ul ref={loginRef} className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="user-actions">
            <Link to="/cart" className="cart-btn" title="View Cart">
              {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
              <LuShoppingBag />
            </Link>
            {isAuthenticated ? (
              <div className="profile-container">
                <button
                  className="user-btn"
                  title="User Profile"
                  onClick={() => setProfileModal((prev) => !prev)}>
                  <span>{user?.name?.[0]}</span>
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
