import { LuBox, LuHeart } from "react-icons/lu";

function UserProfileModal(props) {
  const { user } = props;

  return (
    <div className="user-profile-modal">
      <div className="user-name">
        <h2>Hi, {user?.name?.split(" ")[0]}</h2>
      </div>
      <ul className="profile-options">
        <li>
          <LuBox />
          <span>Orders</span>
        </li>
        <li>
          <LuHeart />
          <span>Favorites</span>
        </li>
      </ul>
      <div>
        <button>Sign Out</button>
      </div>
    </div>
  );
}

export default UserProfileModal;
