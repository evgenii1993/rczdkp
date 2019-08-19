import React from "react";
import DialogContainer from "./Dialog/DialogContainer";
import s from './Dialogs.module.css';
import MessageConteiner from "./Message/MessageConteiner";
const Dialogs = (props) => {
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogContainer />
            </div>
            
            <div className={s.messages}>
                <MessageConteiner />
            </div>
        </div>
    );
}

export default Dialogs;