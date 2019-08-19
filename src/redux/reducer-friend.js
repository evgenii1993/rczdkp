import { usersAPI } from "../api/usersAPI";

const FOLLOW_FRIEND = "FOLLOW-FRIEND";
const UN_FOLLOW_FRIEND = "UN-FOLLOW-FRIEND";
const SET_FRIEND = "SET-FRIEND";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_CURRENT_COUNT_FRIEND = "SET-CURRENT-COUNT-FRIEND";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FETCHING_FOLLOW_ADD = "TOGGLE-IS-FETCHING-FOLLOW-ADD";
const TOGGLE_IS_FETCHING_FOLLOW_REMOVE = "TOGGLE-IS-FETCHING-FOLLOW-REMOVE";

let initialState = {
    friends: [
        
    ],
    currentCountFriend: 20,
    currentPage: 1,
    totalCount: 20,
    isFetching: false,
    disabledFollowUsers: []
}

const reducerFriend = (state = initialState, action) => {
    
    switch (action.type) {
        case FOLLOW_FRIEND: {
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.id) {
                        friend.followed = true;
                    }
                    return friend;
                })
            }
        }
        case UN_FOLLOW_FRIEND: {
            return {
                ...state,
                friends: state.friends.map(friend => {
                    if (friend.id === action.id) {
                        friend.followed = false;
                    }
                    return friend;
                })
            }
        }
        case SET_FRIEND: {
            return {
                ...state,
                friends: [...action.newFriends]
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                friends: [...state.friends],
                currentPage: action.currentPage
            }
        }
        case SET_CURRENT_COUNT_FRIEND: {
            return {
                ...state,
                currentCountFriend: action.currentCountFriend
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FETCHING_FOLLOW_ADD: {
            return {
                ...state,
                disabledFollowUsers: [...state.disabledFollowUsers,  action.id]
            }
        }
        case TOGGLE_IS_FETCHING_FOLLOW_REMOVE: {
            return {
                ...state,
                disabledFollowUsers: state.disabledFollowUsers.filter((itemId) => {
                    if (itemId !== action.id) {
                        return itemId;
                    }
                })
            }
        }
        default:
            return state; 
    }
}


export const follow = (id) => ({ type: FOLLOW_FRIEND, id: id });
export const unFollow = (id) => ({ type: UN_FOLLOW_FRIEND, id: id });
export const setFriends = (newFriends) => ({type: SET_FRIEND, newFriends: newFriends});
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setCurrentCountFriend = (currentCountFriend) => ({type: SET_CURRENT_COUNT_FRIEND, currentCountFriend});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFetchingFollowAdd = (id) => ({type: TOGGLE_IS_FETCHING_FOLLOW_ADD, id});
export const toggleIsFetchingFollowRemove = (id) => ({type: TOGGLE_IS_FETCHING_FOLLOW_REMOVE, id});



export const getFriends = (currentPage, currentCountFriend) => {
    return (dispatch) => { 
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, currentCountFriend)
            .then(data => {
                dispatch(setFriends(data.items));
                dispatch(setTotalCount(data.totalCount));
                dispatch(toggleIsFetching(false));
            })  
    }
}

export const unFollowSuccess = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingFollowAdd(id));
        usersAPI.unFollow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(id));
            }
            dispatch(toggleIsFetchingFollowRemove(id));
        })
    }
}


export const followSuccess = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingFollowAdd(id));
        usersAPI.follow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleIsFetchingFollowRemove(id));
        })
    }
}

export default reducerFriend;