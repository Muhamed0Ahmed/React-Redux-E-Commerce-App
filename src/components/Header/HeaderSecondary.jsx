import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderSecondary.scss";

const HeaderSeconary = () => {
    const showSideBar = (e) => {
        const elementSideContainer = document.querySelector(".sidebar-container");

        elementSideContainer.style.display = "block"

    }
    return(
        <div className="header-secondary-container">
            <div className="content">
                <button className="link-sidebar-all" onClick={showSideBar}>
                    <FontAwesomeIcon icon={faBars}/>
                    <span>All</span>                    
                </button>
                <Link to="/todays_deals">
                    Today's Deals
                </Link>
                <Link to="/customer_service">
                    Customer Service
                </Link>
                <Link to="/registry">
                    Registry
                </Link>
                <Link to="/gift_cards">
                    Gift Cards
                </Link>
                <Link to="/sell">
                    Sell
                </Link>
            </div>
        </div>
    )
}

export default HeaderSeconary