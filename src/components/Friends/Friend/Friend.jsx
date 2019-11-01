import React from 'react';
import s from './Friend.module.css';
import avaPhoto from "./../../../assets/avatar-man.png"
import {NavLink} from "react-router-dom";

const Friend = ({friend, unFollowSuccess, followSuccess,  disabledFollowUsers}) => {
    return (
        <div key={friend.id} className={s.item}>
            <div className={s.panelControl}>
                <div className={s.imageWrap}>
                    <NavLink to={`/profile/${friend.id}`}>
                        <img src={friend.photos.small !== null ?
                                friend.photos.small : avaPhoto} className={s.img} />
                    </NavLink>
                </div>
                {friend.followed ?
                    <button onClick={() => { unFollowSuccess(friend.id) }} 
                            disabled={disabledFollowUsers.some((item) => {
                                return item === friend.id;
                            })}
                            className={`${s.button} ${s.unFollow}`}>Unfollow</button>
                    :
                    <button onClick={() => { followSuccess(friend.id) }} 
                            disabled={disabledFollowUsers.some((item) => {
                                return item === friend.id;
                            })}
                            className={`${s.button} ${s.follow}`}>Follow</button>
                }
            </div>
            <div className={s.panelInfo}>
                <span className={s.name}>{friend.name}</span>
                <span className={s.status}>{friend.status}</span>
                <div className={s.location}>
                    <div className={s.country}>friend.address.country</div>
                    <div className={s.city}>friend.address.city</div>
                </div>
            </div>
        </div>
    );
}

export default Friend;
