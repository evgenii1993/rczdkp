import React from "react";
import { addMessage, updateMessageDialog } from '../../../redux/reducer-dialog';
import Message from "./Message";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        textMessage: state.dialogsPage.textMessage,
        auth: state.auth.isAuth
    }
}


const MessageConteiner = connect(mapStateToProps, {updateMessageDialog, addMessage})(Message);

export default MessageConteiner;