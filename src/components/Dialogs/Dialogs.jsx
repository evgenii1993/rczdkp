import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Egor</NavLink>
                    </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Oksana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Galina</NavLink>
                    </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Oleg</NavLink>
                    </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>I'm smart man and i get everything</div>
            </div>
        </div>
    );
}

export default Dialogs;