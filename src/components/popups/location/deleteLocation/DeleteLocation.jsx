import React from "react";
import style from "./DeleteLocation.module.scss";
import { useDispatch } from "react-redux/es/exports";
import { deleteLocationCard } from "../../../../redux/slices/locationsSlice";
import { ReactComponent as CloseSvg } from "../../../../assets/images/icons/close-icon.svg";
import { ReactComponent as WarningSvg } from "../../../../assets/images/icons/icon-warning.svg";

const DeleteLocation = ({ card, setPopupDelete }) => {
  const dispatch = useDispatch();

  function cardRemove() {
    console.log(card.id);
    dispatch(deleteLocationCard(card.id));
    setPopupDelete(false);
  }

  return (
    <div className="popup">
      <div className={`popup__inner ${style.popupInner}`}>
        <div className="popup__header">
          <h2 className="popup__header-title">Delete Location</h2>
          <button
            className="popup__close-btn"
            onClick={() => setPopupDelete(false)}
          >
            <CloseSvg />
          </button>
        </div>
        <div className="popup__content">
          <p className={style.popupContentText}>
            Are you sure want to delete “{card.LocationName}” Location?
          </p>
          <div className="warning-text">
            <WarningSvg />
            <p>
              Deleting a location might impact the users' configuration and
              leave information (e.g. the initial brought forward days).
            </p>
          </div>
          <button
            className={`button ${style.button}`}
            onClick={() => cardRemove()}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteLocation;
