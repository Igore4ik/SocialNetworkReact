import {isLoginThunk} from "./authReducer";

const SET_INITIALISE = "SET_INITIALISE";

//state by default
const initialState = {
    initialized: false
};

//action creators
export const setInitialise = () => {
    return {
        type: SET_INITIALISE
    };
};

// обычно задиспатчил и забыл, но метод dispatch оказывается может возвращать значение если мы ретурним что-то из санки, можно к примеру вернуть промис.
//     Чтобы дождаться нескольких промисов Promise.all([promise1, promise2, promise3]).then(()=>{ do something ...})
// редирект можно сделить и в ручную: this.props.history.push("/pageName")

//thunk creators
export const isInitialiseApp = () => (dispatch) => {
        //в promise мы получаем резельтат выполнения санки isLoginUser, так как там стоит ретурн, т.е. мы получаем результат
        //и можем записать в переменную а не просто задиспатчить
        let promise = dispatch(isLoginThunk());
        //когда промис выполнен - диспатчим setInitialise
        Promise.all([promise])
            .then(() => {
            dispatch(setInitialise());
        })

};

const appReducer = (state = initialState, action) => {
    if (action.type === SET_INITIALISE) {
        return {
            ...state,
            initialized: true
        };
    } else {
        return state;
    }
};
export default appReducer;