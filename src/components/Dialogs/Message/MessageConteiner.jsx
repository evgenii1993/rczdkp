import React from "react";
import { addMessageActionCreator, updateMessageDialogActionCreator } from '../../../redux/reducer-dialog';
import Message from "./Message";
import { connect } from "react-redux";



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