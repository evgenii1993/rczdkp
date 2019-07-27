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
                id: "1", 
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
                        <div>
                            <div className={s.imageWrap}>
                                <img src={friend.urlAvatar} className={s.img}/>
                            </div>
                            {friend.isFollow ? 
                                <button onClick={friend.unFollow}>Unfollow</button> 
                                : 
                                <button onClick={friend.follow}>Follow</button>
                            }
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default Friends;