import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    

    let postsElements = props.posts.posts.map(post => <Post message={post.message} countLike={post.countLike}/>);

    let refPost = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    let handleChange = (event) => {
        let action = {
            type: "UPDATE-TEXT-MESSAGE",
            newText: event.target.value
        }
        props.dispatch(action); 
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