import React from "react";
import s from './Dialogs.module.css';

const Dialogs= (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>Egor</div>
                <div className={s.dialog}>Oksana</div>
                <div className={s.dialog}>Galina</div>
                <div className={s.dialog}>Oleg</div>
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