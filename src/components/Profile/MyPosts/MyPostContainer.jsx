import React from 'react';
import {addPostActionCreator} from '../../../redux/reducer-profile';
import MyPost from './MyPost';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    
    return {
        posts: state.profilePage.posts,
        textMessage: state.profilePage.textMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}



const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;