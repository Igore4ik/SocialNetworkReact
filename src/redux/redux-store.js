import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerDialogsPage from "./reducer-dialogsPage";
import reducerProfilePage from "./reducer-profilePage";
import reducerUsersPage from "./reducer-users";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: reducerProfilePage,
    dialogsPage: reducerDialogsPage,
    usersPage: reducerUsersPage,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
let store = createStore(reducers,applyMiddleware(thunk));
window.store = store;
export default store;
