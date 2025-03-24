import { faBars,  faLocationDot,faCartShopping, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import usFlag from "../../image/us-flag-inverted.png";

import {useDispatch, useSelector} from "react-redux"
import "./Header.scss";
import { Link } from "react-router-dom";
// import Sidebar from "../Sidebar/Sidebar";
// import HeaderSeconary from "./HeaderSecondary";
// import { authFaild, logOut } from "../../store/AuthSlice/AuthAction";

const Header = () => {
  const dispatch = useDispatch()
  const isLogIn = useSelector(state => state.auth.isLogIn);
  const user = useSelector(state => state.auth.user);
  const productCart = useSelector(state => state.cart.items);
  const itemsIds = useSelector(state => state.cart.itemsIds)
  const userName = isLogIn ? localStorage.name : "user";
  const showSideBar = (e) => {
  const elementSideContainer = document.querySelector(".sidebar-container");
  elementSideContainer.style.display = "block";
  }


  const signOutFunction = () => {
    dispatch(user.logOut());
    // localStorage.setItem("name", "");
    // localStorage.setItem("id", "");
    // localStorage.setItem("email", "");
    // localStorage.setItem("cart", "")
    localStorage.clear()
  }
  const signInOurOut = !isLogIn?<Link to="/login">Sign In</Link>: <button onClick={signOutFunction}>Sign Out</button>;
  return (
    <>
    <div className="header-container">
      <header className="header-nav">
        {/* nav left top in mobile screen  */}

        <div className="header-nav-left">
          <div className="header-toggle-sidebar" onClick={showSideBar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="header-brand">
              <Link to="/"><h2>Amazona</h2></Link>
            
          </div>
          <Link to="/" className="header-deliver-to">
            <span>Deliver to</span>
            <span> <FontAwesomeIcon icon={faLocationDot}/> Egypt</span>
          </Link>
        </div>

        <div className="header-search">
          <form>
            <select name="all" id=""  >
                <option value="all">All</option>
                <option value="catg1">categ one</option>
                <option value="catg2">categ two</option>
                <option value="catg3">categ three</option>
                <option value="catg4">categ four</option>
            </select>
            <input type="search" />
            <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
          </form>
        </div>

        <div className="header-nav-right">
          <div className="header-user-info">
            <span className="header-user-lineone">Hello {userName},</span>
            <span className="header-user-linetwo" >{signInOurOut}</span>
          </div>
          <div>
              <select name="language" id="langauge" defaultValue="ksa">
                  <option value="usa">USA</option>
                  <option value="ksa">KSA</option>
              </select>
          </div>
          <div className="header-cart">
            <Link to="/cartShop"><FontAwesomeIcon icon={faCartShopping} /></Link>
            <span className="cart-counter">{itemsIds.length}</span>
          </div>
          

          {/* <img src={usFlag} alt="flag us" /> */}
        </div>
      </header>
      
      {/* <Sidebar/> */}
    </div>
    {/* <HeaderSeconary/> */}
    </>
  );
};

export default Header;
