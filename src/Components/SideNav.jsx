import React from "react";
import "./SideNav.css";
import Icon from "./Icon";
import { ReactComponent as HomeIcon } from "../Assets/home.svg";
import { ReactComponent as AboutIcon } from "../Assets/about.svg";
import { ReactComponent as RollIcon } from "../Assets/roll.svg";

export default function Navbar() {
  return (
    <div>
      <div className="area" />
      <nav className="main-menu">
      
        <ul>
          <li>
            <a href="/Home">
             <Icon className="icon" svg={RollIcon} />
              <i className="fa fa-home fa-2x" />
              <span className="nav-text">1806503</span>
            </a>
          </li>
          <li>
            <a href="/Home">
             <Icon className="icon" svg={HomeIcon} />
              <i className="fa fa-home fa-2x" />
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/About">
            <Icon className="icon" svg={AboutIcon} />
              <i className="fa fa-laptop fa-2x" />
              <span className="nav-text">About</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
