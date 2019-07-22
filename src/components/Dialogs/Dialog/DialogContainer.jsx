import React from "react";
import {connect} from "react-redux";
import Dialog from "./Dialog";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}

const DialogContainer = connect(mapStateToProps, null)(Dialog);

export default DialogContainer;