import React, {Component} from 'react';
import s from './Friends.module.css';
import * as axios from "axios";
import avaPhoto from './../../assets/avatar-man.png';

class Friends extends Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.currentCountFriend}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }
    
    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.currentCountFriend}`)
            .then(response => {
                this.props.setFriends(response.data.items);
            })
    } 

    render() {
        let pagination = [];
        let allPage = Math.ceil(this.props.totalCount / this.props.currentCountFriend);

        for (let i = 1; i <= allPage; i++) {
           // let item = `<span className=${this.props.currentPage == i && s.activePage}>${i}</span>`;
           pagination.push(i);  
        }

        return (<div>
            {
                pagination.map(index => {
                    return (
                        <span   
                            className={this.props.currentPage === index ? s.activePage : ""} 
                            onClick={(e) => {this.onPageChange(index)}}>
                            {index}
                        </span>
                    )
                })
            }
            {this.props.friends.map(friend => {
                        return (
                            <div key={friend.id} className={s.item}>
                                <div className={s.panelControl}>
                                    <div className={s.imageWrap}>
                                        <img src={friend.photos.small !== null ?
                                            friend.photos.small : avaPhoto} className={s.img} />  
                                    </div>
                                    {friend.followed ? 
                                        <button onClick={() => {this.props.unFollow(friend.id)}} className={`${s.button} ${s.unFollow}` }>Unfollow</button> 
                                        : 
                                        <button onClick={() => {this.props.follow(friend.id)}} className={`${s.button} ${s.follow}` }>Follow</button>
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
}

export default Friends;