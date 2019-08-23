import React from "react";
import { addMessage, updateMessageDialog } from '../../../redux/reducer-dialog';
import Message from "./Message";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        textMessage: state.dialogsPage.textMessage
    }
}

export default compose(
    connect(mapStateToProps, { updateMessageDialog, addMessage }),
    withAuthRedirect
)(Message);