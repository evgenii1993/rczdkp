import React from 'react';
import s from './Friends.module.css';
import * as axios from "axios";
import avaPhoto from './../../assets/avatar-man.png';
const Friends = (props) => {
    
    let getUsers = () => {
        if (props.friends.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setFriends(response.data.items);
                })
        }
    }
    return (<div>
        {props.friends.map(friend => {
                     return (
                        <div key={friend.id} className={s.item}>
                            <div className={s.panelControl}>
                                <div className={s.imageWrap}>
                                    <img src={friend.photos.small !== null ?
                                        friend.photos.small : avaPhoto} className={s.img} />  
                                </div>
                                {friend.followed ? 
                                    <button onClick={() => {props.unFollow(friend.id)}} className={`${s.button} ${s.unFollow}` }>Unfollow</button> 
                                    : 
                                    <button onClick={() => {props.follow(friend.id)}} className={`${s.button} ${s.follow}` }>Follow</button>
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
                    )
                })
            }
            <button onClick={getUsers}>get user</button>
        </div>
    );
}

export default Friends;