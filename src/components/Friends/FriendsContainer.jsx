import React from "react";
import { followAC, unFollowAC, setFriendAC } from '../../redux/reducer-friend';
import Friends from "./Friends";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        friends: state.friendPage
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
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;