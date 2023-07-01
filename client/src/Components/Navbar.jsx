import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Chat, DarkMode, LightMode, Notifications } from "@mui/icons-material";

import { DarkModeContext } from "../context/DarkModeContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const icons = [
    { icon: <Chat /> },
    { icon: <Notifications /> },
    {
      icon: darkMode ? (
        <DarkMode onClick={toggle} />
      ) : (
        <LightMode onClick={toggle} />
      ),
    },
  ];

  const nav = [
    {
      name: "Explore",
      href: "/",
    },
    {
      name: "Community",
      href: "/community",
    },
    {
      name: "Profile",
      href: "/profile/1",
    },
  ];

  return (
    <div className="flex items-center justify-between py-10 px-20 h-[50px] border-b sticky top-0 z-50 bg-primary text-primary border-primary">
      <div className="left">
        <Link to={"/"}>
          <span className="text-3xl font-extrabold">GeekSocial</span>
        </Link>
      </div>
      <div className="center">
        <div className="flex gap-4 px-2 py-3 border rounded-lg bg-secondary border-primary">
          {nav.map((item, key) => (
            <span key={key}>
              <NavLink
                to={item.href}
                className={({ isActive }) => {
                  return isActive
                    ? "bg-primary px-3 py-2 rounded-md shadow-md font-semibold text-sm"
                    : "text-sm text-secondary";
                }}
              >
                {item.name}
              </NavLink>
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-8 right">
        {icons.map((item, key) => (
          <span
            className="h-10 w-10 rounded-[50%] flex justify-center items-center cursor-pointer border bg-secondary border-primary"
            key={key}
          >
            {item.icon}
          </span>
        ))}
        <div className="flex items-center gap-5 user">
          <span className="text-lg font-light text-secondary">
            {currentUser.name}
          </span>
          <img src={currentUser.profilePic} alt="user" className="user-img" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
