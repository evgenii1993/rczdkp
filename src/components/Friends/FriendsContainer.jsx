import React, {Component} from "react";
import { follow, unFollow, 
    setCurrentCountFriend, 
    toggleIsFetchingFollowAdd, toggleIsFetchingFollowRemove, getFriends, followSuccess, unFollowSuccess  } from '../../redux/reducer-friend';
import Friends from "./Friends";
import { connect } from "react-redux";
import Preloader from "./../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class FriendsContainer extends Component {
    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.currentCountFriend);   
    }
    
    onPageChange = (numberPage) => {
        this.props.getFriends(numberPage, this.props.currentCountFriend);
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
                        followSuccess={this.props.followSuccess}
                        unFollowSuccess={this.props.unFollowSuccess}
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


const FriendsWithAuthRedirect = withAuthRedirect(FriendsContainer);

export default  connect(mapStateToProps, 
    {follow, unFollow, setCurrentCountFriend, toggleIsFetchingFollowAdd, toggleIsFetchingFollowRemove, getFriends, followSuccess, unFollowSuccess})(FriendsWithAuthRedirect);