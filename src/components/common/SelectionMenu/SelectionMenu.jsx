import React, {useEffect, useRef, useState} from "react";
import s from "./SelectionMenu.module.css";
import SetComponentVisible from "../../../utils/setComponentVisible";


const SelectionMenu = ({selectItemProps = null, items = [], ...props}) => {
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = SetComponentVisible(false);

    const [selectItem, changeItem] = useState(selectItemProps);

    const handleClick = (item) => {
        changeItem(item);
        setIsComponentVisible(false);
        if (props.handleClick) {
            props.handleClick(item);
        }
    };

    return (
        <div className={s.selectMenuWrapper}>
            <div className={s.selectMenu}>
                <div className={s.selectItem}>{selectItem}</div>
                <button onClick={() => setIsComponentVisible(true)} className={s.button}> V </button>
            </div>
            <div className={`${s.selectMenuList} ${isComponentVisible ? s.open : s.close}`} ref={ref} >
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} onClick={() => handleClick(item)} className={`${s.selectItem} ${selectItem === item ? s.activeItem : ""}`}>
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SelectionMenu;