import React from "react";
import { addMessageActionCreator, updateMessageDialogActionCreator } from '../../../redux/reducer-dialog';
import Message from "./Message";

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
}

export default MessageConteiner;