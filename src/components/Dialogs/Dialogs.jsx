import React from "react";
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import Message from './Message/Message';
const Dialogs = (props) => {
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog dialogs={props.dialogs}/>
            </div>
            
            <div className={s.messages}>
                <Message messages={props.messages}/>
            </div>
        </div>
    );
}

export default Dialogs;