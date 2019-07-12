import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    
    
    let friendsElements = 
        props.dialogs.map(dialog => { return (
            <div className={s.dialog}>
                <NavLink to={"/dialog/" + dialog.id}>{dialog.name}</NavLink>
            </div>);
        });

    
    return (
        <div>
            {friendsElements}
        </div>
    );
}

export default Dialogs;