import { profileAPI } from "../api/profileAPI";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_TEXT_MESSAGE_POST = 'UPDATE-TEXT-MESSAGE-POST';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_PERSON_INFO = 'SET-PERSON-INFO';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: "1", message: "Hi!", countLike: "12" },
        { id: "2", message: "Hi?", countLike: "2" },
        { id: "3", message: "J_J", countLike: "1" },
        { id: "4", message: "J_J", countLike: "3" }
    ],
    personInfo: null,
    isFetching: false,
    status: ""
}

const reducerProfile = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: state.posts.length + 1,
                message: action.messagePost,
                countLike: 0
            };
            return {
                ...state,
                posts: [...state.posts, post]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((item) => item.id !== action.id)
            }
        }
        case UPDATE_TEXT_MESSAGE_POST: {
            return {
                ...state,
                textMessage: action.message
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_PERSON_INFO: {
            
            return {
                ...state,
                personInfo: action.personInfo
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state; 
    }
}


export const addPost = (messagePost) => ({ type: ADD_POST, messagePost: messagePost.messagePost});

export const deletePost = (id) => ({ type: DELETE_POST, id});

export const updateNewPostText = (message) => ({
    type: UPDATE_TEXT_MESSAGE_POST, message
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});

export const setPersonInfo = (personInfo) => ({
    type: SET_PERSON_INFO, personInfo
});

export const setStatus = (status) => ({
    type: SET_STATUS,  status
});

export const getProfile = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfileUser(id)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setPersonInfo(response.data));
            })
    }
};

export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatusFriend(id)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.putStatusFriend(status)
            .then(response => {
                if (response.resultCode !== 0) {
                    console.warn(`${response.messages}`);
                }
            })
    }
};

export default reducerProfile;