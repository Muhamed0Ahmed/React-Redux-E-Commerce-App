import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Route,Routes } from "react-router-dom"
import './App.scss';

import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from "./components/Register/Register";
import { authSuccess } from "./store/AuthSlice/AuthAction";
import { useSelector } from "react-redux";
import CartShopping from "./components/CartShopping/CartShopping";
import { addAllCart } from "./store/Cart/CartActions";
import Profile from "./components/Profile/Profile";

function App() {
 const cart = useSelector(state => state.cart.productCart);
  const dispatch = useDispatch()
  useEffect(() => {
    // if(localStorage.getItem("cart")){
    //   dispatch(addAllCart(JSON.parse(localStorage.getItem("cart"))))
      
    // }
    if(localStorage.getItem("name")){
      dispatch(authSuccess({
        id: localStorage.id,
        username: localStorage.name,
        email: localStorage.email
      }))
    }
  },[])
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}>
          
        </Route>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cartShop" element={<CartShopping/>}/>
      </Routes>
     

    </div>
  );
}

export default App;
