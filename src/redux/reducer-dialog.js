const ADD_MESSAGE_DIALOG = 'rczdkp/reducer-dialog/ADD-MESSAGE';

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
    ]
};

const reducerDialog = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_DIALOG: {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length+1, text: action.message, user: "me"}]
            };
        }
       
        default: {
            return state;
        }
    }
}

export const addMessage = (message) => ({
    type: ADD_MESSAGE_DIALOG,
    message: message.message
});



export default reducerDialog;