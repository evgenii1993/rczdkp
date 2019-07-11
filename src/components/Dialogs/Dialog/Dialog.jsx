import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    
    
    let friendsElements = 
        props.friends.map(friend => { return (
            <div className={s.dialog}>
                <NavLink to={"/dialog/" + friend.id}>{friend.name}</NavLink>
            </div>);
        });

    
    return (
        <div>
            {friendsElements}
        </div>
    );
}

export default Dialogs;