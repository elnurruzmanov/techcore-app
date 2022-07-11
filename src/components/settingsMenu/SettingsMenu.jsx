import React from "react";
import style from "./SettingsMenu.module.scss";
import { ReactComponent as GeneralSvg } from "../../assets/images/icons/general-icon.svg";
import { ReactComponent as CalendarSvg } from "../../assets/images/icons/calendar-small-ixon.svg";
import { ReactComponent as ArrowSvg } from "../../assets/images/icons/arrow-left-icon.svg";

const SettingsMenu = ({close}) => {
  return (
    <div className={style.settingsMenu}>
      <p className={style.title}>Settings</p>
      <ul>
        <li className={style.menuItem}>
          <div className={style.menuItemTitle}>
            <GeneralSvg />
            General
          </div>
        </li>
        <li className={style.menuItem}>
          <div className={style.menuItemTitle}>
            <CalendarSvg />
            Vacation Manager
          </div>
          <ul >
            <li className={style.submenuItem}>Leave Types</li>
            <li className={`${style.submenuItem} ${style.active}`}>Locations</li>
          </ul>
        </li>
      </ul>
      <button className={style.btnBack} onClick={() => close(false)}>
        <ArrowSvg />
      </button>
    </div>
  );
};

export default SettingsMenu;
