import {getProfile, getStatus, updateStatus} from "../api/api";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

//state by default
let initialState = {
    posts: [
        {id: 1, text: "It's my first post", countLikes: 12},
        {id: 2, text: "Hello everyone", countLikes: 2},
        {id: 3, text: "Nice to meet you", countLikes: 123}
    ],
    profile: null,
    status: ""
};

//action creators
export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        text
    };
};
export const deletePostActionCreator = (id) => {
    return {
        type: DELETE_POST,
        id
    };
};
export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    };
};
export const updateStatusDisp = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    };
};
let id = 100;

//thunk creators
export const setProfileThunk = (userId) => {
    return (dispatch) => {
        getProfile(userId)
            .then((data) => {
                dispatch(setProfile(data));
            });
    }
};

export const setStatusThunk = (userId) => {
    return (dispatch) => {
        getStatus(userId)
            .then((data) => {
                dispatch(setStatus(data));
            });
    }
};

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        updateStatus(status)
            .then((data) => {
                if (data.resultCode === 0) dispatch(updateStatusDisp(status));
            });
    }
};

const reducerProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: id++, text: action.text, countLikes: 0}
                ]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(el=> el.id !== action.id)

            };
        // case DELETE_POST:
        //     return {
        //         ...state,
        //         posts: [
        //             state.posts.filter(id=> id !== action.id)
        //         ]
        //     };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                userId: action.userId
            };
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};
export default reducerProfilePage;