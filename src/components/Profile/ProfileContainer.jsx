import React, {Component} from 'react';
import {addPost, updateNewPostText, toggleIsFetching, setPersonInfo} from './../../redux/reducer-profile';
import Profile from './Profile/Profile';
import MyPost from './MyPosts/MyPost';
import { connect } from "react-redux";
import Preloader from '../common/Preloader/Preloader';
import * as axios from 'axios';


class ProfileContainer  extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setPersonInfo(response.data);
                
            })
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



export default connect(mapStateToProps, {addPost, updateNewPostText, toggleIsFetching, setPersonInfo})(ProfileContainer);