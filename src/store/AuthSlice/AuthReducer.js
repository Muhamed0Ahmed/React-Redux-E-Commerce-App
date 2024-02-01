import { AUTH_FAILD, AUTH_REQUEST, AUTH_SUCCESS ,LOGOUT} from "./AuthTypes";


const initState = {
    loading: false,
    isLogIn : false,
    user : [],
    error : "",
}


const AuthReducer = (state = initState, action) => {
    switch(action.type){
        case AUTH_REQUEST : return {
            ...state,
            loading: true,
            user:[],
            isLogIn : false
        }
        case AUTH_SUCCESS : return {
            ...state,
            loading: false ,
            isLogIn: true,
            user : [{
                username: action.payload.username,
                id : action.payload.id,
                email : action.payload.email,
                password : action.payload.password,
                terms : action.payload.terms
            }],
        }
        case AUTH_FAILD : return {
            ...state ,
            loading:false,
            isLogIn : false,
            user : [],
            error : action.payload
        }
        case LOGOUT:
            return {
              ...initState, // Reset to initial state
            };


        default : return state;
    }
}

export default AuthReducer;