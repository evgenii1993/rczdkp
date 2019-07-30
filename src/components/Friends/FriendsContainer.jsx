import React from "react";
import { followAC, unFollowAC, setFriendAC, setTotalCountAC, setCurrentPageAC, setCurrentCountFriendAC } from '../../redux/reducer-friend';
import Friends from "./Friends";
import { connect } from "react-redux";



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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;