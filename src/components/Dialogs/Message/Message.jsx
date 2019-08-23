import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    
    let messagesElements = props.messages.map(message => <div key={message.id} className={`${s.message} ${message.user}`}>{message.text}</div>);
    let mesAreaRef = React.createRef();

    let handleChange = () => {
        let message = mesAreaRef.current.value;
        props.updateMessageDialog(message);
    }
    let addMessage = () => {
        props.addMessage();
    }


    return (
        <div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.panelMessage}>
                <textarea ref={mesAreaRef} onChange={handleChange} value={props.textMessage}></textarea>
                <button onClick={addMessage}>Post</button>
            </div>
        </div>
    );
}

export default Message;