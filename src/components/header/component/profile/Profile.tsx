import { Link } from "react-router-dom";

const linkList = [
  {
    url: "/user-profile",
    label: "Profile",
  },
  {
    url: "/order-history",
    label: "Order History",
  },
  {
    url: "/login",
    label: "Logout",
  },
];

export const Profile = () => {
  const renderLinks = () => {
    return linkList.map((item, id) => (
      <li key={id}>
        <Link to={item.url} className="justify-between text-accent-content">
          {item.label}
        </Link>
      </li>
    ));
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {renderLinks()}
      </ul>
    </div>
  );
};

export default Profile;
