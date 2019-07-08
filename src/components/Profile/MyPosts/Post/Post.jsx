import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://static.thenounproject.com/png/363639-200.png" />
                {props.message}
            </div>
            <span>like</span> <span>{props.countLike}</span>
        </div>
    );
}

export default Post;