import React from "react";
import style from "./LocationCard.module.scss";
import { Button, Dropdown, Menu } from "antd";
import DeleteLocation from "../popups/location/deleteLocation/DeleteLocation";
import { ReactComponent as DotsSvg } from "../../assets/images/icons/dots-icon.svg";
import { ReactComponent as PenSvg } from "../../assets/images/icons/pen-icon.svg";
import { ReactComponent as StarSvg } from "../../assets/images/icons/star-icon.svg";
import { ReactComponent as DeleteSvg } from "../../assets/images/icons/trashcan-icon.svg";

const LocationCard = ({ card }) => {
  const [popupDelete, setPopupDelete] = React.useState(false);

  const menu = (
    <Menu
      className="popup__span"
      items={[
        {
          key: "1",
          label: (
            <a
              className="popup__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              <PenSvg />
              Edit
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              className="popup__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              <StarSvg />
              Set as Default
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <button
              className="popup__link"
              rel="noopener noreferrer"
              onClick={() => setPopupDelete(true)}
            >
              <DeleteSvg />
              Delete
            </button>
          ),
        },
      ]}
    />
  );

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className={style.LocationCard}>
      <h2 className={style.title}>
        {card.LocationName} {card.Default && <span>default</span>}
      </h2>
      <div className={style.inner}>
        <div className={style.item}>
          Holidays <span>View Holidays</span>
        </div>
        <div className={style.item}>
          Leave Policies <span>View Leave Policies</span>
        </div>
      </div>
      <ul className={style.personList}>
        {card.Users.slice(0, 7).map((user, index) => (
          <li key={index} style={{ background: `${getRandomColor()}` }}>
            {user.slice(0, 2)}
          </li>
        ))}
        {card.Users.length > 7 && <p>+{card.Users.length - 7}</p>}
      </ul>

      <Dropdown
        className="location-card__popup"
        overlay={menu}
        placement="bottomLeft"
      >
        <Button className={style.popupButton}>
          <DotsSvg />
        </Button>
      </Dropdown>

      {popupDelete && (
        <DeleteLocation card={card} setPopupDelete={setPopupDelete} />
      )}
    </div>
  );
};

export default LocationCard;
