import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://static.thenounproject.com/png/363639-200.png" />
                post 1
            </div>
            <span>like</span>
        </div>
    );
}

export default Post;