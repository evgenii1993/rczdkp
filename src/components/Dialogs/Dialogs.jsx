import React from "react";
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message';
const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog friends={props.friends}/>
            </div>
            
            <div className={s.messages}>
                <Message messages={props.messages}/>
            </div>
        </div>
    );
}

export default Dialogs;