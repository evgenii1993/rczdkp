import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    

    let postsElements = props.posts.map(post => <Post message={post.message} countLike={post.countLike}/>);

    let refPost = React.createRef();

    let addPost = () => {
        let newMessage = refPost.current.value;
        props.addPost(newMessage);
    }
    return (
        <div className={s.myPost}>
            <div>
                My post
                <div>
                    <textarea ref={refPost}></textarea>
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