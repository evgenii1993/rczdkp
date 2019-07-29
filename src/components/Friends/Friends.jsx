import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {
    
    if (props.friends.length === 0) {
        let newFriend = [
            { 
                id: "1", 
                urlAvatar: "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg", 
                name: "Evgen",
                status: "I'm Evgen. My life will the best, from step to step",
                isFollow: false,
                address: {
                    country: "Russia",
                    city: "TLT"
                }
            },
            { 
                id: "2", 
                urlAvatar: "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg", 
                name: "Eva",
                status: "I'm Evgen. My life will the best, from step to step",
                isFollow: false,
                address: {
                    country: "Russia",
                    city: "TLT"
                }
            }
        ];
        props.setFriends(newFriend);
    }
    return (<div>
        {props.friends.map(friend => {
                     return (
                        <div key={friend.id} className={s.item}>
                            <div className={s.panelControl}>
                                <div className={s.imageWrap}>
                                    <img src={friend.urlAvatar} className={s.img}/>
                                </div>
                                {friend.isFollow ? 
                                    <button onClick={() => {props.unFollow(friend.id)}} className={`${s.button} ${s.unFollow}` }>Unfollow</button> 
                                    : 
                                    <button onClick={() => {props.follow(friend.id)}} className={`${s.button} ${s.follow}` }>Follow</button>
                                }
                            </div>
                            <div className={s.panelInfo}>
                                <span className={s.name}>{friend.name}</span>
                                <span className={s.status}>{friend.status}</span>
                                <div className={s.location}>
                                    <div className={s.country}>{friend.address.country}</div>
                                    <div className={s.city}>{friend.address.city}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default Friends;