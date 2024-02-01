

import  {AUTH_FAILD, AUTH_REQUEST, AUTH_SUCCESS, LOGOUT} from "./AuthTypes";



const authRequest = () => {
    return {
        type : AUTH_REQUEST,
    }
}

const authSuccess = (user) => {
    return{
        type : AUTH_SUCCESS,
        payload : user
    }
}

const authFaild = (error) => {
    return {
        type : AUTH_FAILD,
        payLoad : error,
    }
}
const logOut =() => {
    return{
        type:LOGOUT,
    }
}

export {authFaild, authRequest,authSuccess, logOut}