import React from "react";
import "./Sidenav.scss";
import Logo from "../../assets/pizza_logo.png";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const navArray = [
  {
    name: "Home",
    path: "/",
    icon: solid("home"),
  },
  {
    name: "Menu",
    path: "/menu",
    icon: solid("list-alt"),
  },
  {
    name: "Cart",
    path: "/cart",
    icon: solid("shopping-cart"),
  },
  {
    name: "Orders",
    path: "/orders",
    icon: solid("list-ol"),
  },
  {
    name: "My Profile",
    path: "/myprofile",
    icon: solid("user"),
  },
];

const Sidenav = () => {
  return (
    <>
      <div className="sidenav__wrapper">
        <div className="sidenav__container">
          <div className="sidenav__header">
            <div className="sidenav__header-logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="sidenav__header-title">Pizza</div>
          </div>
          <hr className="divider"></hr>
          <div className="sidenav__body">
            <ul className="sidenav__list">
              {navArray.map((nav) => (
                <NavLink
                  key={nav.name}
                  to={nav.path}
                  className="sidenav__list-link"
                  style={({ isActive }) => ({
                    background: isActive ? "rgb(255, 167, 38)" : "",
                  })}
                >
                  <li className="sidenav__list-item">
                    <FontAwesomeIcon icon={nav.icon} className="icon" />
                    <span className="sidenav__list-text">{nav.name}</span>
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
