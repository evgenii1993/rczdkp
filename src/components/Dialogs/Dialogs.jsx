import React from "react";
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from './Message/Message';
const Dialogs = (props) => {
    let friends = [
        {id: "1", name: "Egor"},
        {id: "2", name: "Oksana"},
        {id: "3", name: "Galina"},
        {id: "4", name: "Oleg"}
    ];
    let messages = [
        {text: "Hi"},
        {text: "Hi!"},
        {text: "I'm smart man and i get everything"}
    ];
    
  

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog friends={friends}/>
            </div>
            
            <div className={s.messages}>
                <Message messages={messages}/>
            </div>
        </div>
    );
}

export default Dialogs;