import React, {Component} from "react";
import { followAC, unFollowAC, setFriendAC, setTotalCountAC, setCurrentPageAC, setCurrentCountFriendAC, toggleIsFetchingAC  } from '../../redux/reducer-friend';
import Friends from "./Friends";
import { connect } from "react-redux";
import * as axios from "axios";
import Preloader from "./../common/Preloader/Preloader";

class FriendsContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.currentCountFriend}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }
    
    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.currentCountFriend}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.toggleIsFetching(false);
            })
    } 

    render() {

        return (
            <>
                { this.props.isFetching ? 
                    <Preloader />
                    :
                    <Friends 
                        totalCount={this.props.totalCount}
                        currentCountFriend={this.props.currentCountFriend}
                        currentPage={this.props.currentPage}
                        onPageChange={this.onPageChange}
                        friends={this.props.friends}
                        unFollow={this.props.unFollow}
                        follow={this.props.follow}
                    /> 
                }
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        friends: state.friendPage.friends,
        currentCountFriend: state.friendPage.currentCountFriend,
        currentPage: state.friendPage.currentPage,
        totalCount: state.friendPage.totalCount,
        isFetching: state.friendPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}



export default  connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);