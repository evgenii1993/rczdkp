import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={s.myPost}>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button className="add post">Add</button>
                </div>
                <div>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
}

export default MyPost;