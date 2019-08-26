import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import s from './../Dialogs.module.css';


const Message = (props) => {
    
    let messagesElements = props.messages.map(message => <div key={message.id} className={`${s.message} ${message.user}`}>{message.text}</div>);

    let sendMessage = (message) => {
        props.addMessage(message);
    }

    return (
        <div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.panelMessage}>
                <AddMessageFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="message"  type="text" />
            <button type="submit">Post</button>
        </form>
    );
};

const afterSubmit = (result, dispatch) => {
    dispatch(reset('addMessage'));
}

const AddMessageFormRedux = reduxForm({
    form: 'addMessage',
    onSubmitSuccess: afterSubmit,
})(AddMessageForm);

export default Message;