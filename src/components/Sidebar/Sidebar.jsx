import {
  // faAngleRight,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  const link1 = {
    name : "Amazon Music",
    ulli : ["Amazon Music unlimited" ,"Free Streeming Music", "open web Player", "Download the App" ]
}
  const quiteFromSiebar = () => {
    const elementSidebar = document.querySelector(".sidebar-container");
    elementSidebar.style.display = "none";
  };

  useEffect(() => {
    // const links = document.querySelectorAll(".link-header");
    // links.addEventListener("click", () => {

    // })
  }, [])
  return (
    <div className="sidebar-container">
      <div className="sidebar-layout">
        <div className="sidebar">
          <div className="header-sidbar">
            <Link to="/sign_in">
              <h4>
                <FontAwesomeIcon icon={faUser} />
                Hello, Sign in
              </h4>
            </Link>
          </div>
          <div className="group-links-categ">
            <h2 className="group-link-header">Digital Content & Devices</h2>

            {/* <div className="group-links">
              <div className="link-header">
                <span>Amazon Music</span>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />{" "}
                </span>
              </div>

              <ul className="">
                <label htmlFor="main-menu">
                <h3>MAIN MENU</h3>
                </label>
                <li> Amazon Music Unlimited</li>
                <li>Free Streeming Music</li>
                <li>products</li>
                <li>Open Web Player</li>
                <li>Download the app</li>
              </ul>
            </div> */}
            <SidebarLink group={link1}/>

           
        

          </div> 
        </div>


        <div className="exit-sidebar" onClick={quiteFromSiebar}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
