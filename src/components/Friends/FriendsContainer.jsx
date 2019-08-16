import React, {Component} from "react";
import { follow, unFollow, setFriends, setTotalCount, setCurrentPage, setCurrentCountFriend, toggleIsFetching, toggleIsFetchingFollowAdd, toggleIsFetchingFollowRemove  } from '../../redux/reducer-friend';
import Friends from "./Friends";
import { connect } from "react-redux";
import Preloader from "./../common/Preloader/Preloader";
import { usersAPI } from "../../api/usersAPI";

class FriendsContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.currentCountFriend)
            .then(data => {
                this.props.setFriends(data.items);
                this.props.setTotalCount(data.totalCount);
                this.props.toggleIsFetching(false);
            })          
    }
    
    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(numberPage, this.props.currentCountFriend)
            .then(data => {
                this.props.setFriends(data.items);
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
                        disabledFollowUsers={this.props.disabledFollowUsers}
                        toggleIsFetchingFollowAdd={this.props.toggleIsFetchingFollowAdd}
                        toggleIsFetchingFollowRemove={this.props.toggleIsFetchingFollowRemove}
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
        isFetching: state.friendPage.isFetching,
        disabledFollowUsers: state.friendPage.disabledFollowUsers
    }
}


export default  connect(mapStateToProps, 
    {follow, unFollow, setFriends, setTotalCount, setCurrentPage, setCurrentCountFriend, toggleIsFetching, toggleIsFetchingFollowAdd, toggleIsFetchingFollowRemove})(FriendsContainer);