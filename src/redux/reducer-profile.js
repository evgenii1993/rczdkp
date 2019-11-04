import { profileAPI } from "../api/profileAPI";

const ADD_POST = 'rczdkp/reducer-profile/ADD-POST';
const DELETE_POST = 'rczdkp/reducer-profile/DELETE-POST';
const UPDATE_TEXT_MESSAGE_POST = 'rczdkp/reducer-profile/UPDATE-TEXT-MESSAGE-POST';
const TOGGLE_IS_FETCHING = 'rczdkp/reducer-profile/TOGGLE-IS-FETCHING';
const SET_PERSON_INFO = 'rczdkp/reducer-profile/SET-PERSON-INFO';
const SET_STATUS = 'rczdkp/reducer-profile/SET-STATUS';
const SET_AVATAR = 'rczdkp/reducer-profile/SET-AVATAR';

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
};

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

        case SET_AVATAR: {

            return {
                ...state,
                personInfo: {...state.personInfo,
                        photos: {
                            ...state.personInfo.photos,
                            large: action.avatar.photos.large,
                            small: action.avatar.photos.small,
                        }
                    }
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


export const addPost = (messagePost) => ({ type: ADD_POST, messagePost: messagePost.messagePost });

export const deletePost = (id) => ({ type: DELETE_POST, id });

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
    type: SET_STATUS, status
});

export const setAvatarSuccess = (avatar) => ({
    type: SET_AVATAR, avatar
});



export const getProfile = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await profileAPI.getProfileUser(id)
    dispatch(toggleIsFetching(false));
    dispatch(setPersonInfo(response.data));

};


export const getStatus = (id) => async (dispatch) => {
    let response = await profileAPI.getStatusFriend(id)
    dispatch(setStatus(response.data));
};

export const setAvatar = (file) => async (dispatch) => {
    let response = await profileAPI.putAvatar(file)

    dispatch(setAvatarSuccess(response.data.data));

    console.log(response.data);
};


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.putStatusFriend(status)
    if (response.resultCode !== 0) {
        console.warn(`${response.messages}`);
    }
};


export default reducerProfile;