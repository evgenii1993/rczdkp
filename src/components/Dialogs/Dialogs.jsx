import React from "react";
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import Message from './Message/Message';
import MessageConteiner from "./Message/MessageConteiner";
const Dialogs = (props) => {
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {/* <Dialog dialogs={props.store.dialogsPage.dialogs} dispatch={props.dispatch}/> */}
            </div>
            
            <div className={s.messages}>
                <MessageConteiner />
            </div>
        </div>
    );
}

export default Dialogs;