import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    let posts = [
        {message: "Hi!", countLike: "12"},
        {message: "Hi?", countLike: "2"},
        {message: "J_J", countLike: "1"},
        {message: "J_J", countLike: "3"}
    ];

    let postsElements = posts.map(post => <Post message={post.message} countLike={post.countLike}/>);
    return (
        <div className={s.myPost}>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button className="add post">Add</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPost;