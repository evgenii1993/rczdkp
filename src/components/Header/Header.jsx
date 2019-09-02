import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    
    return (
        <header className={s.header}>
            
            {props.isAuth ? 
                <div>
                    {props.login}
                    <button onClick={props.logoutUser}>Выйти</button>
                </div> 
                : 
                <NavLink to="/login"> Login </NavLink> 
            }
        </header>
    );
}

export default Header;