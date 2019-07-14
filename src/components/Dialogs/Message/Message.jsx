import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    let messagesElements = props.messages.map(message => <div className={`${s.message} ${message.user}`}>{message.text}</div>);
    let mesAreaRef = React.createRef();

    let getNewMessage = () => {
        let message = mesAreaRef.current.value;
        console.log(message);
    }


    return (
        <div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.panelMessage}>
                <textarea ref={mesAreaRef}></textarea>
                <button onClick={getNewMessage}>Post</button>
            </div>
        </div>
    );
}

export default Message;