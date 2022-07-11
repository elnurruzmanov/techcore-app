import React from "react";
import SettingsMenu from "../../components/settingsMenu/SettingsMenu";
import VacationManager from "../vacationManager/VacationManager";
import style from "./Settings.module.scss";

const Settings = () => {
  const [settingsMenuIsVisible, setSettingsMenuIsVisible] =
    React.useState(true);

  return (
    <div className={style.settings}>
      {settingsMenuIsVisible && (
        <SettingsMenu close={setSettingsMenuIsVisible} />
      )}
      <VacationManager />
    </div>
  );
};

export default Settings;
