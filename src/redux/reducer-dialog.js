const ADD_MESSAGE_DIALOG = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE_DIALOG = 'UPDATE-TEXT-MESSAGE-DIALOG';

const reducerDialog = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE_DIALOG: 
            let message = {
                text: state.textMessage,
                user: action.user
            };
            
            state.messages.push(message);
            state.textMessage = "";
            return state;
        
        case UPDATE_TEXT_MESSAGE_DIALOG: 
            state.textMessage = action.newText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE_DIALOG,
    user: "me"
});

export const updateMessageDialogActionCreator = (text) => ({
    type: UPDATE_TEXT_MESSAGE_DIALOG, 
    newText: text
});

export default reducerDialog;