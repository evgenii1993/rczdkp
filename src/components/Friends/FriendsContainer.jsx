import React, {Component} from "react";
import { followAC, unFollowAC, setFriendAC, setTotalCountAC, setCurrentPageAC, setCurrentCountFriendAC } from '../../redux/reducer-friend';
import Friends from "./Friends";
import { connect } from "react-redux";
import * as axios from "axios";


class FriendsContainer extends Component {
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
        return (<Friends 
            totalCount={this.props.totalCount}
            currentCountFriend={this.props.currentCountFriend}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            friends={this.props.friends}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
        />)
    }
}


let mapStateToProps = (state) => {
    return {
        friends: state.friendPage.friends,
        currentCountFriend: state.friendPage.currentCountFriend,
        currentPage: state.friendPage.currentPage,
        totalCount: state.friendPage.totalCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unFollow: (id) => {
            dispatch(unFollowAC(id));
        },
        setFriends: (friends) => {
            dispatch(setFriendAC(friends));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setCurrentCountFriend: (currentCountFriend) => {
            dispatch(setCurrentCountFriendAC(currentCountFriend));
        }
    }
}



export default  connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);