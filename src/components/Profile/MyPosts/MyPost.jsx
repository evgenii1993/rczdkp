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
                    <Post message="Hi!" countLike="12"/>
                    <Post message="Hi?" countLike="2"/>
                    <Post message="J_J"countLike="1"/>
                </div>
            </div>
        </div>
    );
}

export default MyPost;