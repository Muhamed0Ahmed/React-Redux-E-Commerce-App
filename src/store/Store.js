
import  { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./RootReducer";


const Store = createStore(RootReducer , composeWithDevTools());


export default Store;