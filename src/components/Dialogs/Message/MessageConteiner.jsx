import React from "react";
import { addMessageActionCreator, updateMessageDialogActionCreator } from '../../../redux/reducer-dialog';
import Message from "./Message";
import { connect } from "react-redux";

/*
const MessageConteiner = (props) => {

    let onUpdateMessageFiend = (text) => {
        props.dispatch(updateMessageDialogActionCreator(text));
    }
    let onAddMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    return <Message onUpdateMessageFiend={onUpdateMessageFiend}
                    onAddMessage={onAddMessage}
                    messages={props.store.dialogsPage.messages}
                    textMessage={props.store.dialogsPage.textMessage} />
}*/

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        textMessage: state.dialogsPage.textMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateMessageFiend: (text) => {
            dispatch(updateMessageDialogActionCreator(text));
        },
        onAddMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const MessageConteiner = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageConteiner;