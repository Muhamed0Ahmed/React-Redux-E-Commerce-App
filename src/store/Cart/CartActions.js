import { ADD_QUANTITY,  ADD_TO_CART , REMOVE_FROM_CART ,SUB_QUANTITY, EMPTY_CART, ADD_ALL_CART, SUB_TOTAL_PRICE} from "./CartTypes"


const addAllCart = (products) => {
    return {
        type:ADD_ALL_CART,
        payload: products
    }

}
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
const subTotalPrice = () => {
    return {
        type :  SUB_TOTAL_PRICE
    }
}

export {addQuantity,addToCartAction , removeFromCartAction, subQuantity,emptyCart, addAllCart, subTotalPrice}