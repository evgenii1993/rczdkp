import { profileAPI } from "../api/profileAPI";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_MESSAGE_POST = 'UPDATE-TEXT-MESSAGE-POST';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_PERSON_INFO = 'SET-PERSON-INFO';

let initialState = {
    posts: [
        { id: "1", message: "Hi!", countLike: "12" },
        { id: "2", message: "Hi?", countLike: "2" },
        { id: "3", message: "J_J", countLike: "1" },
        { id: "4", message: "J_J", countLike: "3" }
    ],
    personInfo: null,
    textMessage: "",
    isFetching: false
}

const reducerProfile = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: state.posts.length + 1,
                message: state.textMessage,
                countLike: 0
            };
            return {
                ...state,
                posts: [...state.posts, post],
                textMessage: ""
            };
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
        default:
            return state; 
    }
}


export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (message) => ({
    type: UPDATE_TEXT_MESSAGE_POST, message
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});

export const setPersonInfo = (personInfo) => ({
    type: SET_PERSON_INFO, personInfo
})


export const getProfile = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        profileAPI.getProfileUser(id)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setPersonInfo(response.data));
            })
    }
}
export default reducerProfile;