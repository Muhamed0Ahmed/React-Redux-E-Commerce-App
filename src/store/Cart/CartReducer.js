
import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  EMPTY_CART,
  ADD_ALL_CART,
  SUB_TOTAL_PRICE
} from "./CartTypes";

const initalState = {
  productCart: [],
  totalPrice : 0,
};
const CartReducer = (state = initalState, action) => {
  switch (action.type) {
      case ADD_ALL_CART: 
      return{
        ...state,
        productCart: [...action.payload],
        
      }
   
      case ADD_TO_CART:
      return {
        ...state,
        productCart: [...state.productCart,{
          ...action.payload,
          quantity: 1,
        }],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        productCart: state.productCart.filter((item) => item["_id"] !== action.payload),
        totalPrice: state.totalPrice - (state.productCart.filter((item) => item["_id"] == action.payload)[0].price* state.productCart.filter((item) => item["_id"] === action.payload)[0].quantity),
      };
    case ADD_QUANTITY:
      
      return {
        ...state,
        productCart: state.productCart.map((product) =>
          product["_id"] === action.payload
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        ),
        totalPrice: state.totalPrice + state.productCart.filter(item => item["_id"] === action.payload)[0].price,
      };

    case SUB_QUANTITY:
      return {
        ...state,
        productCart: state.productCart.map((product) =>
          product["_id"] === action.payload
            ? {
                ...product,
                quantity: Math.max(product.quantity - 1, 0),
              }
            : product
        ),
        totalPrice: state.totalPrice - state.productCart.filter(item => item["_id"] === action.payload)[0].price,

      };
    case EMPTY_CART:
      return {
        ...state,
        productCart: state.productCart.map((product) =>
          product.selected
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    case SUB_TOTAL_PRICE : 
    return{
      ...state,
      totalPrice  : state.productCart.reduce((totalPrice,cartItem) =>{
        const [price, quantity] = cartItem;
        const priceTotalItem = price* quantity;
        totalPrice.totalPrice = totalPrice + priceTotalItem
        return totalPrice;
      } ,{
        totalPrice : 0,
      } )
    }

    default: 
      return state;
  }
};

export default CartReducer;
