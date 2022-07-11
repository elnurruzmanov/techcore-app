import React from "react";

import style from "./VacationManager.module.scss";

import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LocationCard from "../../components/locationCard/LocationCard";
import CreateLocation from "../../components/popups/location/createLocation/CreateLocation";

import { ReactComponent as SettingsSvg } from "../../assets/images/icons/settings-small-icon.svg";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchLocationCards } from "../../redux/slices/locationsSlice";

const VacationManager = () => {
  const [createLocatiunIsVisible, setCreateLocatiunIsVisible] =
    React.useState(false);
  const dispatch = useDispatch();
  const { LocationCards, status } = useSelector(
    (state) => state.locationsSlice
  );

  function fetchCards() {
    dispatch(fetchLocationCards());
  }

  React.useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (status === "update") {
      fetchCards();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="page">
      <Breadcrumb
        items={["Settings", "Vacation Manager"]}
        icon={<SettingsSvg />}
      />
      <section className={style.location}>
        <div className={style.top}>
          <div className={style.title}>
            <h2>Locations</h2>
            <p>
              Create new users or update the existng users. You can then set
              their permissons here too.
            </p>
          </div>
          <button
            className={`button ${style.createButton}`}
            onClick={() => setCreateLocatiunIsVisible(true)}
          >
            Create Location
          </button>
        </div>
        {status === "error" ? (
          <div>не найдено</div>
        ) : (
          <div className={style.cards}>
            {LocationCards.map((item, index) => (
              <LocationCard key={index} card={item} />
            ))}
          </div>
        )}

        {createLocatiunIsVisible && (
          <CreateLocation changeVisible={setCreateLocatiunIsVisible} />
        )}
      </section>
    </div>
  );
};

export default VacationManager;
