import React from "react";
import "./UserName.styles.css";
import { FaUserAlt } from "react-icons/fa";

const UserName = () => {
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
  return (
    <div className="username-container">
      <h1  className="username">
        <FaUserAlt color="#17706E" />
        username@resoluteai.in
      </h1>
      <div className="time-container" >
      <h1> Add Student </h1>
      <h2>
      {date} {time}
      </h2>
      </div>
    </div>
  );
};

export default UserName;
