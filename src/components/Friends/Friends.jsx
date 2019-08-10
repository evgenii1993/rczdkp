import React from "react";
import  s  from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import avaPhoto from './../../assets/avatar-man.png';
import * as axios from 'axios';
import { expressionStatement } from "@babel/types";

let Friend = (props) => {
    let pagination = [];
    let allPage = Math.ceil(props.totalCount / props.currentCountFriend);

    for (let i = 1; i <= allPage; i++) {
        pagination.push(i);
    }

    return (<div>
        {
            pagination.map(index => {
                return (
                    <span
                        className={props.currentPage === index ? s.activePage : ""}
                        onClick={(e) => { props.onPageChange(index) }}
                        key={index}>
                        {index}
                    </span>
                )
            })
        }
        {props.friends.map(friend => {
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
                            <button onClick={() => { 
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${friend.id}`,  {
                                                withCredentials: true,
                                                headers:  {'API-KEY': '28573ac2-4e3d-436e-a06e-785713baaebe'}
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(friend.id);
                                                }
                                            })
                                    }
                                } 
                                className={`${s.button} ${s.unFollow}`}>Unfollow</button>
                            :
                            <button onClick={() => { 
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${friend.id}`, {}, {
                                            withCredentials: true,
                                            headers: {'API-KEY': '28573ac2-4e3d-436e-a06e-785713baaebe'}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(friend.id);
                                            }
                                        })
                                    

                                }
                            } 
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
            )
        })
        }
    </div>
    );
}

export default Friend;