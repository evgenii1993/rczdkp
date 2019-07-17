const ADD_MESSAGE_DIALOG = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE_DIALOG = 'UPDATE-TEXT-MESSAGE-DIALOG';

let initialState = {
    dialogs: [
        { id: "1", name: "Egor" },
        { id: "2", name: "Oksana" },
        { id: "3", name: "Galina" },
        { id: "4", name: "Oleg" }
    ],
    messages: [
        { text: "Hi", user: "me" },
        { text: "Hi!", user: "other" },
        { text: "I'm smart man and i get everything", user: "me" }
    ],
    textMessage: ""
};

const reducerDialog = (state = initialState, action) => {
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