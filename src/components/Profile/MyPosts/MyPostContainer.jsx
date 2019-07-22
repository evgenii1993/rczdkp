import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/reducer-profile';
import MyPost from './MyPost';
import {connect} from 'react-redux';
// const MyPostContainer = (props) => {
    
//     let onAddPost = () => {
//         props.dispatch(addPostActionCreator());
//     };

//     let onNewTextMessage = (text) => {
//         props.dispatch(updateNewPostTextActionCreator(text)); 
//     };

//     return <MyPost  posts={props.store.profilePage.posts}
//                     textMessage={props.store.profilePage.textMessage}
//                     onAddPost={onAddPost}
//                     onNewTextMessage={onNewTextMessage} />
// }

let mapStateToProps = (state) => {
    
    return {
        posts: state.profilePage.posts,
        textMessage: state.profilePage.textMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        onNewTextMessage: (text) => {
            debugger
            dispatch(updateNewPostTextActionCreator(text));
        },
        onAddPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}



const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;