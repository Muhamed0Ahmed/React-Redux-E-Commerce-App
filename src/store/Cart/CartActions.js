import { ADD_QUANTITY,  ADD_TO_CART , REMOVE_FROM_CART ,SUB_QUANTITY, EMPTY_CART} from "./CartTypes"



const addToCartAction = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item,

    }
}
const removeFromCartAction = (id) => {
    return {
        type: REMOVE_FROM_CART,
         payload:id

    }
}
const addQuantity = (id) => {
    return {
        type : ADD_QUANTITY,
        payload:id
    }
}
const subQuantity = (id) => {
    return {
        type : SUB_QUANTITY,
        payload:id,
    }
}
const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}


export {addQuantity,addToCartAction , removeFromCartAction, subQuantity,emptyCart}