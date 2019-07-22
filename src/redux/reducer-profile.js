const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_MESSAGE_POST = 'UPDATE-TEXT-MESSAGE-POST';

let initialState = {
    posts: [
        { message: "Hi!", countLike: "12" },
        { message: "Hi?", countLike: "2" },
        { message: "J_J", countLike: "1" },
        { message: "J_J", countLike: "3" }
    ],
    textMessage: ""
}

const reducerProfile = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            let post = {
                message: state.textMessage,
                countLike: 0
            };
            let newState = {...state};
            newState.posts = [...state.posts];
            newState.posts.push(post);
            newState.textMessage = "";
            return newState;
        }
        case UPDATE_TEXT_MESSAGE_POST: {
            let newState = {...state};
            newState.textMessage = action.newText;
            return newState;
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