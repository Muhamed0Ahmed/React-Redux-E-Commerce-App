import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

const SidebarLink = (props) => {
    const ul= useRef();
    const showMainMenu = e => {
        ul.current.classList.remove("remove");
        ul.current.classList.add("show");
        
    }
    const removeSideBar = e => {
        ul.current.classList.remove("show");
        ul.current.classList.add("remove");
    }
    return (
        <div className="group-links">
              <div className="link-header" onClick ={showMainMenu}>
                <span>{props.group.name}</span>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />{" "}
                </span>
              </div>

              <ul className="remove" ref={ul}>
                <label htmlFor="main-menu">
                <button onClick={removeSideBar}>
                <h3>
                    <FontAwesomeIcon icon={faAngleLeft} style={{fontSize:"20px", marginRight:"10px"}}/>
                    MAIN MENU
                    </h3>
                    </button>
                </label>
                {/* <li> Amazon Music Unlimited</li>
                <li>Free Streeming Music</li>
                <li>products</li>
                <li>Open Web Player</li>
                <li>Download the app</li> */}
                {props.group.ulli.map((link,idx) => <li key={link + idx}>{link}</li>)}
              </ul>
            </div>
    )
}

export default SidebarLink

