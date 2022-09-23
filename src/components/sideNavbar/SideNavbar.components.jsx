import React from "react";
import { BsFillPeopleFill, BsListUl } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./SideNavbar.styles.css";

const SideNavbar = () => {
  const linkStyle = { textDecoration: "none", color: "#000" };
  return (
    <div className="nav-container">
      <Link style={linkStyle} to="/">
        <h1 className="nav-logo">LOGO</h1>
      </Link>
      <ul className="nav-items">
        <Link style={linkStyle} to="/">
          <li className="nav-link">
            <BsFillPeopleFill size={30} color={"#17706E"} />
            Add Student
          </li>
        </Link>
        <Link style={linkStyle} to="/manage-students">
          <li className="nav-link">
            <BsListUl size={30} color={"#17706E"} />
            Manage Student
          </li>
        </Link>
        <Link style={linkStyle} to="/logout">
          <li className="nav-link">
            <HiOutlineLogout size={30} color={"#17706E"} />
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;
