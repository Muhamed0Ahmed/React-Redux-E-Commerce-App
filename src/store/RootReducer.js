import { combineReducers } from "redux";
import AuthReducer from "./AuthSlice/AuthReducer";
import CartReducer from "./Cart/CartReducer";
import registrReducer from "./RegisterReducer/RegisterReducer";

const RootReducer = combineReducers({
    auth : AuthReducer,
    cart : CartReducer,
    registar: registrReducer
})

export default RootReducer