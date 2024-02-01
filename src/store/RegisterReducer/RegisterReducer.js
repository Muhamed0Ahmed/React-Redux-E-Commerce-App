import { UPDATE_REGISTRATION_FORM } from "./RegisterAction";

const initialRegistrationState = {
    userName: "",
    email: "",
    password:"",
    confirmPassword:''

};

const registrationFormReducer = (state= initialRegistrationState, action) =>{
    switch (action.type){
        case UPDATE_REGISTRATION_FORM:
            return{
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default registrationFormReducer