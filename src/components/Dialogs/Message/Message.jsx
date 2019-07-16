import React from "react";
import s from './../Dialogs.module.css';
import {addMessageActionCreator, updateMessageDialogActionCreator} from './../../../redux/reducer-dialog';

const Message = (props) => {
    let messagesElements = props.messages.messages.map(message => <div className={`${s.message} ${message.user}`}>{message.text}</div>);
    let mesAreaRef = React.createRef();

    let handleChange = () => {
        let message = mesAreaRef.current.value;
        props.dispatch(updateMessageDialogActionCreator(message));
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    return (
        <div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.panelMessage}>
                <textarea ref={mesAreaRef} onChange={handleChange} value={props.messages.textMessage}></textarea>
                <button onClick={addMessage}>Post</button>
            </div>
        </div>
    );
}

export default Message;