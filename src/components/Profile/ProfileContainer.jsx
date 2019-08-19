import React, { Component } from 'react';
import { addPost, updateNewPostText, getProfile } from './../../redux/reducer-profile';
import Profile from './Profile/Profile';
import MyPost from './MyPosts/MyPost';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer  extends Component {
    
    componentDidMount() {    
        let idFriend = this.props.match.params.idFriend;
        
        if (!idFriend) {
            idFriend = 2;
        }

        this.props.getProfile(idFriend);
    }
    render () {
        
        return (
            <>
                { 
                    this.props.isFetching ? 
                        <Preloader />
                        :
                        <>
                            <Profile personInfo={this.props.personInfo}/>
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
        personInfo: state.profilePage.personInfo
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { 
    addPost, updateNewPostText, 
    getProfile })(WithUrlDataContainerComponent);