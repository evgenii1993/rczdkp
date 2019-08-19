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
        { id: "1", text: "Hi", user: "me" },
        { id: "2", text: "Hi!", user: "other" },
        { id: "3", text: "I'm smart man and i get everything", user: "me" }
    ],
    textMessage: ""
};

const reducerDialog = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_DIALOG: {
            let message = {
                id: state.messages.length,
                text: state.textMessage,
                user: action.user
            };
            
            return {
                ...state,
                messages: [...state.messages, message],
                textMessage: ""
            };
        }
        case UPDATE_TEXT_MESSAGE_DIALOG: {
            return {
                ...state,
                textMessage: action.newText
            };
        }
        default: {
            return state;
        }
    }
}

export const addMessage = () => ({
    type: ADD_MESSAGE_DIALOG,
    user: "me"
});

export const updateMessageDialog = (text) => ({
    type: UPDATE_TEXT_MESSAGE_DIALOG, 
    newText: text
});

export default reducerDialog;