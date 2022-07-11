import React from "react";



import style from "./menu.module.scss";
 


import { ReactComponent as LogoSvg } from "../../assets/images/icons/logo-icon.svg";
import { ReactComponent as HomeSvg } from "../../assets/images/icons/home-icon.svg";
import { ReactComponent as UsersSvg } from "../../assets/images/icons/users-icon.svg";
import { ReactComponent as SettingsSvg } from "../../assets/images/icons/settings-icon.svg";
import { ReactComponent as FolderSvg } from "../../assets/images/icons/folder-icon.svg";
import { ReactComponent as CalendarSvg } from "../../assets/images/icons/calendar-icon.svg";
import { ReactComponent as BellSvg } from "../../assets/images/icons/bell-icon.svg";



import { Link } from "react-router-dom";

const Menu = () => {
  const [activeLink, setActiveLink] = React.useState("home");

  return (
    <div className={style.menu}>
      <Link className={style.logo} to={"/"}>
        <LogoSvg />
      </Link>
      <ul className={style.menuList}>
        <Link
          to={"/"}
          className={`${style.menuItem} ${
            activeLink === "home" && style.active
          }`}
          onClick={() => setActiveLink("home")}
        >
          <HomeSvg />
          <p>Dashboard</p>
        </Link>
        <Link
          to={"/"}
          className={`${style.menuItem} ${
            activeLink === "Users" && style.active
          }`}
          onClick={() => setActiveLink("Users")}
        >
          <UsersSvg />
          <p>Users</p>
        </Link>
        <Link
          to={"Settings"}
          className={`${style.menuItem} ${
            activeLink === "settings" && style.active
          }`}
          onClick={() => setActiveLink("settings")}
        >
          <SettingsSvg />
          <p>Settings</p>
        </Link>
        <Link
          to={"/"}
          className={`${style.menuItem} ${activeLink === "pl" && style.active}`}
          onClick={() => setActiveLink("pl")}
        >
          <FolderSvg />
          <p>P&L</p>
        </Link>
        <Link
          to={"/"}
          className={`${style.menuItem} ${
            activeLink === "Vacation" && style.active
          }`}
          onClick={() => setActiveLink("Vacation")}
        >
          <CalendarSvg />
          <p>Vacation Manager</p>
        </Link>
      </ul>
      <div className={style.bell}>
        <BellSvg />
      </div>
      <div className={style.avatar}>
        <p>JS</p>
      </div>
    </div>
  );
};

export default Menu;
