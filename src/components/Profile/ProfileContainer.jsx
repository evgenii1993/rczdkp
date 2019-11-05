import React, { Component } from 'react';
import { addPost, updateNewPostText, getProfile, getStatus } from './../../redux/reducer-profile';
import Profile from './Profile/Profile';
import MyPost from './MyPosts/MyPost';
import { withRouter, Redirect } from 'react-router';
import { compose } from "redux";
import { connect } from "react-redux";
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {setAvatar, updateStatus} from "../../redux/reducer-profile";



class ProfileContainer  extends Component {

    refreshProfile() {
        let idFriend = this.props.match.params.idFriend;

        if (!idFriend) {
            idFriend = 1417;
        }
        this.props.getProfile(idFriend);
    }
    
    componentDidMount() {    
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let id = this.props.match.params.idFriend;
        if (!id && id != prevProps.match.params.idFriend) {
            this.refreshProfile();
        }
    }

    render () {
        return (
            <>
                { 
                    this.props.isFetching ? 
                        <Preloader />
                        :
                        <>
                            <Profile personInfo={this.props.personInfo}
                                     isOwner={!this.props.match.params.idFriend}
                                     status={this.props.status}
                                     getStatus={this.props.getStatus}
                                     updateStatus={this.props.updateStatus}
                                     setAvatar={this.props.setAvatar}
                            />
                            <MyPost 
                                addPost={this.props.addPost}
                                updateNewPostText={this.props.updateNewPostText}
                                textMessage={this.props.textMessage}
                                posts={this.props.posts}
                            />
                        </>
                }
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textMessage: state.profilePage.textMessage,
        isFetching: state.profilePage.isFetching,
        personInfo: state.profilePage.personInfo,
        editProfile: state.profilePage.editProfile,
        status: state.profilePage.status
    }
}


export default compose(
    connect(mapStateToProps, { 
        addPost, updateNewPostText, 
        getProfile,
        getStatus,
        updateStatus,
        setAvatar
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);