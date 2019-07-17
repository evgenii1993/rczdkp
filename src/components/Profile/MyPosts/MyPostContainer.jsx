import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducer-profile';
import MyPost from './MyPost';

const MyPostContainer = (props) => {
    
    let onAddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onNewTextMessage = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text)); 
    };

    return <MyPost  posts={props.store.profilePage.posts}
                    textMessage={props.store.profilePage.textMessage}
                    onAddPost={onAddPost}
                    onNewTextMessage={onNewTextMessage} />
}

export default MyPostContainer;