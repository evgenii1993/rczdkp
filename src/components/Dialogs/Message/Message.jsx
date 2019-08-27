import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import s from './../Dialogs.module.css';
import { renderTextarea } from "../../common/componentForm/componentForm";
import { required, maxLength } from "../../../utils/validation/validation";


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
const maxLength30 = maxLength(5);
const AddMessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <Field component={renderTextarea} name="message" type="text" validate={[required, maxLength30]} />
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