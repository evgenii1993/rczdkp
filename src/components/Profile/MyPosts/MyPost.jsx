import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/reducer-profile';

const MyPost = (props) => {
    

    let postsElements = props.posts.posts.map(post => <Post message={post.message} countLike={post.countLike}/>);

    let refPost = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let handleChange = (event) => {
        props.dispatch(updateNewPostTextActionCreator(event.target.value)); 
    };
    
    

    return (
        <div className={s.myPost}>
            <div>
                My post
                <div>
                    <textarea ref={refPost}
                              onChange={handleChange}
                              value={props.posts.textMessage}
                              >
                    </textarea>
                    <button className="add post" onClick={addPost}>Add</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPost;