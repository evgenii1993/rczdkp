import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
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
    let friendsElements = 
        friends.map(friend => { return (
            <div className={s.dialog}>
                <NavLink to={"/dialog/" + friend.id}>{friend.name}</NavLink>
            </div>);
        });
    let messagesElements = messages.map(message => <div className={s.message}>{message.text}</div>);

    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {friendsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;