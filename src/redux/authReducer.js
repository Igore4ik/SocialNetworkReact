import {isLoginUser, loginEnter, loginOut, secirityCaptca} from "../api/api";
import {stopSubmit} from "redux-form";

const IS_USER_LOGIN = "IS_USER_LOGIN";
const SET_CAPTCHA = "SET_CAPTCHA";

//state by default
const initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin: false,
    captcha: null
    // captcha: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=Ud28GoFQihR3W%2BwTUEdEKA%3D%3D"
};

//action creators
export const setLogin = (userId,login,email,isLogin) => {
    return {
        type: IS_USER_LOGIN, userId,login,email,isLogin
    };
};
export const setCaptcha = (captcha) => {
    // debugger
    return {
        type: SET_CAPTCHA,
        captcha
    }
}


//thunk creators
export const isLoginThunk = () => (dispatch) => {
       return  isLoginUser().then((data) => {
            if(data.resultCode ===0){
                let {id, login, email} = data.data;
                dispatch(setLogin(id, login, email,true));
            }
        });
};
export const loginThunk = (email,password,rememberMe,captcha) => {

    return (dispatch) => {
        loginEnter(email,password,rememberMe,captcha).then((data) => {
            if(data.resultCode ===0){
                dispatch(isLoginThunk());
            }else{
                if(data.resultCode ===10){
                  dispatch(captchaThunk());
                }
                let error = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: error}))
            }
        });
    }
};
export const captchaThunk = () => {
    return (dispatch) => {
        secirityCaptca().then((data) => {
                dispatch(setCaptcha(data.url));

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
            userId: action.userId,
            login: action.login,
            email: action.email,
            isLogin: action.isLogin
        };
    }else if(action.type === SET_CAPTCHA) {
     return {
         ...state,
         captcha: action.captcha
     }
    }
    else {
        return state;
    }
};
export default authReducer;