const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_MESSAGE_POST = 'UPDATE-TEXT-MESSAGE-POST';

let initialState = {
    posts: [
        { id: "1", message: "Hi!", countLike: "12" },
        { id: "2", message: "Hi?", countLike: "2" },
        { id: "3", message: "J_J", countLike: "1" },
        { id: "4", message: "J_J", countLike: "3" }
    ],
    textMessage: ""
}

const reducerProfile = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: state.posts.length,
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
                textMessage: action.newText
            };
        }
        default:
            return state; 
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_TEXT_MESSAGE_POST, newText: text
});


export default reducerProfile;