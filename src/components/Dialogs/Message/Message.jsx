import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    let messagesElements = props.messages.map(message => <div className={`${s.message} ${message.user}`}>{message.text}</div>);

    return (
        <div className={s.messages}>
            {messagesElements}
        </div>
    );
}

export default Message;