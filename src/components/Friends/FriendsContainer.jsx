import React, {Component} from "react";
import { follow, unFollow, 
    setCurrentCountFriend, 
    toggleIsFetchingFollowAdd, toggleIsFetchingFollowRemove, getFriends, followSuccess, unFollowSuccess  } from '../../redux/reducer-friend';
import Friends from "./Friends";
import { compose } from "redux";
import { connect } from "react-redux";
import Preloader from "./../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getFriends as getFriendsSelector, getCurrentCountFriend, getCurrentPage, getTotalCount, getIsFetching, getDisabledFollowUsers } from "./../../redux/selects/selectorFriend";
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
        friends: getFriendsSelector(state),
        currentCountFriend: getCurrentCountFriend(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        disabledFollowUsers: getDisabledFollowUsers(state)
    }
}


export default compose(
        connect(mapStateToProps, {
                follow, unFollow, setCurrentCountFriend, 
                toggleIsFetchingFollowAdd, toggleIsFetchingFollowRemove, getFriends, 
                followSuccess, unFollowSuccess
            }),
        withAuthRedirect
    )(FriendsContainer);