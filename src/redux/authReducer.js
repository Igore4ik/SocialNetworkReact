import {isLoginUser, loginEnter, loginOut} from "../api/api";
import {stopSubmit} from "redux-form";

const IS_USER_LOGIN = "IS_USER_LOGIN";

//state by default
const initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin: false
};

//action creators
export const setLogin = (userId,login,email,isLogin) => {
    return {
        type: IS_USER_LOGIN, data: {userId,login,email},isLogin
    };
};


//thunk creators
export const isLoginThunk = () => (dispatch) => {
       return  isLoginUser().then((data) => {
            if(data.resultCode ===0){
                let {id, login, email} = data.data;
                dispatch(setLogin(id, login, email,true));
            }
        });
};
export const loginThunk = (email,password,rememberMe) => {

    return (dispatch) => {
        loginEnter(email,password,rememberMe).then((data) => {
            if(data.resultCode ===0){
                dispatch(isLoginThunk());
            }else{
                let error = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: error}))
            }
        });
    }
};
export const logoutThunk = () => {
    return (dispatch) => {
        loginOut().then((data) => {
            if(data.resultCode ===0){
                dispatch(setLogin(null,null,null,false));
            }
        });
    }
};

//reducer
const authReducer = (state = initialState, action) => {
    if (action.type === IS_USER_LOGIN) {
        return {
            ...state,
            ...action.data,
            isLogin: action.isLogin
        };
    } else {
        return state;
    }
};
export default authReducer;