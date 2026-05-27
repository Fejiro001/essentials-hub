import { Link, NavLink } from "react-router-dom";
import logo from "../media/logo.svg";
import { LuShoppingBag } from "react-icons/lu";

function Header(props) {
  const { setIsLoginModalOpen } = props;

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Essentials Hub Logo" />
          <h1 className="logo-text">Essentials Hub</h1>
        </Link>
        <nav>
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
          <button
            className="login-btn"
            title="Login"
            onClick={() => setIsLoginModalOpen(true)}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
