import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    
    // let friends = props.friends.map(friend => <NavLink className={s.avatarItem} to={`/friend/${friend.id}`}><img src={friend.src} className={s.avatar}/></NavLink>);

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" activeClassName={s.activeLink}>Setting</NavLink>
            </div>

            <div className={s.item}>
                {/* <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
                <div className={s.wrapperItem} >
                    {friends}
                </div> */}
            </div>
        </nav>
    );
}

export default Navbar;