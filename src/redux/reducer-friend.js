import { usersAPI } from "../api/usersAPI";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW_FRIEND = "rczdkp/reducer-friend/FOLLOW-FRIEND";
const UN_FOLLOW_FRIEND = "rczdkp/reducer-friend/UN-FOLLOW-FRIEND";
const SET_FRIEND = "rczdkp/reducer-friend/SET-FRIEND";
const SET_TOTAL_COUNT = "rczdkp/reducer-friend/SET-TOTAL-COUNT";
const SET_CURRENT_PAGE = "rczdkp/reducer-friend/SET-CURRENT-PAGE";
const SET_CURRENT_COUNT_FRIEND = "rczdkp/reducer-friend/SET-CURRENT-COUNT-FRIEND";
const TOGGLE_IS_FETCHING = "rczdkp/reducer-friend/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FETCHING_FOLLOW_ADD = "rczdkp/reducer-friend/TOGGLE-IS-FETCHING-FOLLOW-ADD";
const TOGGLE_IS_FETCHING_FOLLOW_REMOVE = "rczdkp/reducer-friend/TOGGLE-IS-FETCHING-FOLLOW-REMOVE";

let initialState = {
    friends: [

    ],
    currentCountFriend: 20,
    currentPage: 1,
    totalCount: 20,
    isFetching: false,
    disabledFollowUsers: []
};

const reducerFriend = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_FRIEND: {
            return {
                ...state, 
                friends: updateObjectInArray(state.friends, action.id, "id", {followed: true})
            }
        }
        case UN_FOLLOW_FRIEND: {
            return {
                ...state,
                friends: updateObjectInArray(state.friends, action.id, "id", {followed: false})
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
                disabledFollowUsers: [...state.disabledFollowUsers, action.id]
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
};


export const follow = (id) => ({ type: FOLLOW_FRIEND, id: id });
export const unFollow = (id) => ({ type: UN_FOLLOW_FRIEND, id: id });
export const setFriends = (newFriends) => ({ type: SET_FRIEND, newFriends: newFriends });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setCurrentCountFriend = (currentCountFriend) => ({ type: SET_CURRENT_COUNT_FRIEND, currentCountFriend });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFetchingFollowAdd = (id) => ({ type: TOGGLE_IS_FETCHING_FOLLOW_ADD, id });
export const toggleIsFetchingFollowRemove = (id) => ({ type: TOGGLE_IS_FETCHING_FOLLOW_REMOVE, id });



export const getFriends = (currentPage, currentCountFriend) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, currentCountFriend);
    dispatch(setFriends(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(toggleIsFetching(false));
};


const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreater) => {
    dispatch(toggleIsFetchingFollowAdd(id));
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreater(id));
    }
    dispatch(toggleIsFetchingFollowRemove(id));
};

export const unFollowSuccess = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), unFollow);
};

export const followSuccess = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), follow);
};


export default reducerFriend;