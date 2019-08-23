import React from "react";
import { addMessage, updateMessageDialog } from '../../../redux/reducer-dialog';
import Message from "./Message";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        textMessage: state.dialogsPage.textMessage
    }
}
const MessagewithAuthRedirect = withAuthRedirect(Message);

const MessageConteiner = connect(mapStateToProps, {updateMessageDialog, addMessage})(MessagewithAuthRedirect);

export default MessageConteiner;