import { Link } from "react-router-dom";
import { LuBox, LuHeart, LuLogOut } from "react-icons/lu";
import { useAuthStore } from "../stores/authStore";
import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

function UserProfileModal({ setProfileModal }) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const firstName = user?.name?.split(" ")?.[0];
  const modalRef = useRef();

  useOutsideClick(modalRef, () => {
    setProfileModal(false);
  });

  return (
    <div ref={modalRef} className="user-profile-modal">
      <div className="user-name">
        <h2>Hi, {firstName}</h2>
      </div>
      <ul className="profile-options">
        <li>
          <Link
            to="/orders"
            className="profile-link"
            onClick={() => setProfileModal(false)}>
            <LuBox />
            <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className="profile-link"
            onClick={() => setProfileModal(false)}>
            <LuHeart />
            <span>Favorites</span>
          </Link>
        </li>
      </ul>
      <div>
        <button
          className="signout-btn"
          onClick={() => {
            logout();
            setProfileModal(false);
          }}>
          <LuLogOut />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default UserProfileModal;
