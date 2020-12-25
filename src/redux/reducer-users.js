import {followUser, getUsersAll, unFollowUser} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_CURRENT_PAGE = "SETCURRENTPAGE";
const FETCHING = "FETCHING";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_FOLLOW_BTN = "TOGGLE_FOLLOW_BTN";

//state by default
const initialState = {
    users: [],
    pageSize: 5, // сколько юзеров отобразить на странице
    totalUsersCount: 20, // общее кол-во юзеров  (totalCount)
    currentPage: 1, // текущая стр
    isFetching: true,
    toggleBtn: []
};


//action creators
export const toggleFollowBtn = (isFetching, id) => {
    return {
        type: TOGGLE_FOLLOW_BTN,
        isFetching,
        id
    };
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
};
export const follow = (id) => {
    return {
        type: FOLLOW,
        id
    };
};
export const unFollow = (id) => {
    return {
        type: UNFOLLOW,
        id
    };
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
};
export const toggleFetching = (isFetching) => {
    return {
        type: FETCHING,
        isFetching
    };
};

//thunk creators

export const setUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));

        getUsersAll(currentPage, pageSize).then((data) => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
            // this.props.setTotalUsersCount(data.totalCount);
        })

    }

};
export const followThunk = (userId) => {
    return (dispatch) => {
        return (dispatch) => {
            dispatch(toggleFollowBtn(true,userId));
            unFollowUser(userId).then(data => {
                if (data.resultCode === 0) dispatch(unFollow(userId));
                (toggleFollowBtn(false,userId));
            });

        }

    }

};
export const unFollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowBtn(true,userId));
        followUser(userId).then(data => {
            if (data.resultCode === 0) dispatch(follow(userId));
            (toggleFollowBtn(false,userId));
        });

    }

};


//reducer
const reducerUsersPage = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (action.id === el.id) {
                        return {
                            ...el,
                            followed: false
                        };
                    }
                    return el;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (action.id === el.id) {
                        return {
                            ...el,
                            followed: true
                        };
                    }
                    return el;
                })
            };
        case TOGGLE_FOLLOW_BTN:
            return {
                ...state,
                toggleBtn: action.isFetching
                    ? [...state.toggleBtn, action.id]
                    : state.toggleBtn.filter(el => el !== action.id)
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        default:
            return state;
    }
};

export default reducerUsersPage;
