import React from "react";
import "../../../../style/antd.scss";

import style from "./CreateLocation.module.scss";
import { ReactComponent as CloseSvg } from "../../../../assets/images/icons/close-icon.svg";
import { useDispatch } from "react-redux/es/exports";
import { postLocationCard } from "../../../../redux/slices/locationsSlice";

import { Checkbox, Form, Input, Col, Row, Select } from "antd";
import InfoPopup from "../../info/InfoPopup";

const CreateLocation = ({ changeVisible }) => {
  const { Option } = Select;
  const users = [
    "Elnur Ruzmanov",
    "name1",
    "name2",
    "name3",
    "name4",
    "name5",
    "name6",
    "name7",
    "name8",
    "name9",
  ];
  const dispatch = useDispatch();
  const [warningIsVisible, setWarningIsVisible] = React.useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timezone = [
    "(GMT+7:00) Asia",
    "(GMT+9:30) Kair",
    "(GMT+2:00) Tashkent",
    "(GMT+2:00) Minsk",
  ];

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(postLocationCard(values));
    changeVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.popup}>
      <div className={style.popupInner}>
        <div className={style.popupHeader}>
          <h2 className={style.popupHeaderTitle}>Create Location</h2>
          <button
            className={style.popupClose}
            onClick={() => changeVisible(false)}
          >
            <CloseSvg />
          </button>
        </div>
        <div className={style.popupContent}>
          <Form
            className={style.form}
            id={style.form}
            name="basic"
            initialValues={{
              username: "Elnur",
              LeaveQuotaResetBasedOn: "Accounting year",
              Workweek: days.slice(1, 6),
              FiscalYearStart: { month: months[0], day: 1 },
              NoBroughtForwardExpiryDate: true,
              WeekStartsOn: `${days[1]}`,
              Default: false,
              TimeZone: timezone[0],
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              className={style.nameItem}
              name="LocationName"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className={style.input} placeholder="Location Name" />
            </Form.Item>

            <Form.Item
              className={style.workweekItem}
              name="Workweek"
              label="Workweek"
              rules={[
                {
                  required: true,
                  message: "Please input workweek days",
                },
              ]}
            >
              <Checkbox.Group>
                <Row className={style.checkboxGroup}>
                  {days.map((day, index) => (
                    <Col key={index} span={8}>
                      <Checkbox value={day} style={{ lineHeight: "32px" }}>
                        {day}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              className={style.LeaveQuotaResetBasedOn}
              name="LeaveQuotaResetBasedOn"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Select
                defaultValue={"Accounting year"}
                style={{ width: "100%" }}
              >
                <Option value="Accounting year">Accounting year</Option>
                <Option value="User Employment Date">
                  User Employment Date
                </Option>
              </Select>
              <InfoPopup
                className={style.InfoPopup}
                text={
                  "This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting."
                }
              />
            </Form.Item>

            <Form.Item
              className={style.FiscalYearStart}
              style={{ marginBottom: 24 }}
            >
              <Input.Group compact>
                <Form.Item
                  className={style.FiscalYearStartFirst}
                  name={["FiscalYearStart", "month"]}
                  noStyle
                  rules={[{ required: true, message: "Province is month" }]}
                >
                  <Select style={{ width: 125, marginRight: 16 }}>
                    {months.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name={["FiscalYearStart", "day"]}
                  noStyle
                  rules={[{ required: true, message: "Street is required" }]}
                >
                  <Select style={{ width: 80 }}>
                    {[...Array(31)].map((_, index) => (
                      <Option key={index} value={index + 1}>
                        {index + 1}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Input.Group>
            </Form.Item>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <Form.Item
                name="NoBroughtForwardExpiryDate"
                valuePropName="checked"
              >
                <Checkbox>No Brought Forward Expiry Date </Checkbox>
              </Form.Item>
              <InfoPopup
                className={style.InfoPopup}
                text={
                  "Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs."
                }
              />
            </div>

            <Form.Item
              style={{ marginBottom: 24 }}
              name="WeekStartsOn"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Select style={{ width: 125 }}>
                {days.map((day, index) => (
                  <Option key={index * 20} value={day}>
                    {day}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <div
              style={{
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Form.Item
                style={{ width: "100%" }}
                name="TimeZone"
                defaultValue={timezone[0]}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Select style={{ width: "100%" }}>
                  {timezone.map((item, index) => (
                    <Option key={index} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <InfoPopup
                className={style.InfoPopup}
                text={
                  "This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs."
                }
              />
            </div>

            <Form.Item
              onClick={() => setWarningIsVisible(true)}
              style={{ marginBottom: 24 }}
              name="Users"
              rules={[
                {
                  required: true,
                  message: "Add Users",
                  type: "array",
                },
              ]}
            >
              <Select mode="multiple" placeholder="Add Users">
                {users.map((user, index) => (
                  <Option key={index} value={user}>
                    {user}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            {warningIsVisible && (
              <div className="warning-text">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.32128 0.777726C7.54178 0.899241 6.8359 1.346 6.39859 1.99463C6.25281 2.21082 1.14797 11.0519 1.01854 11.3124C0.57669 12.2013 0.65963 13.3045 1.23182 14.1489C1.61738 14.7179 2.20648 15.1314 2.88897 15.3122L3.15511 15.3827H8.697C14.6392 15.3827 14.396 15.3889 14.857 15.2246C15.278 15.0746 15.5711 14.8881 15.8945 14.5648C16.1517 14.3076 16.3137 14.0763 16.4794 13.7297C16.6792 13.3116 16.7368 13.0439 16.7368 12.5335C16.7368 12.0241 16.6792 11.7553 16.4812 11.341C16.365 11.098 11.4567 2.57098 11.1588 2.09472C10.8599 1.61671 10.3017 1.1346 9.85062 0.964835C9.37246 0.784865 8.7579 0.709658 8.32128 0.777726ZM8.99445 2.06185C9.36989 2.12171 9.74467 2.34251 9.95958 2.63044C10.0986 2.81674 15.1851 11.6148 15.3228 11.9073C15.5369 12.3618 15.4875 12.9369 15.1952 13.3924C14.9574 13.7629 14.5368 14.0245 14.0823 14.0843C13.913 14.1067 12.1289 14.1144 8.57176 14.1081L3.31166 14.099L3.10063 14.0274C2.23851 13.7348 1.79096 12.7546 2.14946 11.944C2.21249 11.8015 7.23069 3.08901 7.45368 2.73495C7.70234 2.3401 8.21426 2.05462 8.71266 2.03279C8.75571 2.03091 8.88251 2.044 8.99445 2.06185ZM8.54462 5.26995C8.2808 5.33695 8.07991 5.52487 7.9594 5.81744C7.90028 5.96093 7.90364 6.16097 7.98867 7.55515C8.02756 8.19231 8.07731 9.01091 8.09926 9.37423C8.14729 10.1691 8.17694 10.2532 8.45995 10.3965C8.6527 10.4942 8.7878 10.5044 8.95631 10.4341C9.2268 10.3213 9.37164 10.0642 9.36879 9.70202C9.36804 9.60615 9.41344 8.73595 9.4697 7.76828C9.58239 5.8294 9.58295 5.84637 9.39973 5.58004C9.22286 5.32299 8.85753 5.19051 8.54462 5.26995ZM8.52461 11.0736C8.14673 11.1976 7.90761 11.5389 7.93585 11.914C7.96979 12.3642 8.29651 12.6721 8.7419 12.6737C9.05989 12.6748 9.32292 12.5119 9.47158 12.222C9.55149 12.0662 9.56013 11.7141 9.48818 11.5449C9.42118 11.3873 9.25739 11.2104 9.10792 11.1341C8.96999 11.0638 8.65436 11.031 8.52461 11.0736Z"
                    fill="#F24445"
                  />
                </svg>
                <p className={style.warning}>
                  Deleting a location might impact the users' configuration and
                  leave information (e.g. the initial brought forward days).
                </p>
              </div>
            )}

            <div
              style={{
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Form.Item name="Default" valuePropName="checked">
                <Checkbox>Make This Location Default</Checkbox>
              </Form.Item>
              <InfoPopup
                className={style.InfoPopup}
                text={
                  "By making this Location the default one, all new team members will be automatically added to this Location."
                }
              />
            </div>

            <div className="policy" style={{ marginBottom: 24 }}>
              Once you've created a Location, assign a{" "}
              <a href={"/"}>Leave Policy</a> to the Location, in order to enable
              Users to request Leave. To assign a Leave Policy, go to Location
              Leave Policies Assign Leave Policy.
            </div>

            <div className={style.buttons}>
              <button
                className={`button button-grey`}
                onClick={() => changeVisible(false)}
              >
                Cancel
              </button>
              <button type="submit" className={`button`}>
                Create
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateLocation;
