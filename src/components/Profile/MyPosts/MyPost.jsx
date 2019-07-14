import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    

    let postsElements = props.posts.posts.map(post => <Post message={post.message} countLike={post.countLike}/>);

    let refPost = React.createRef();

    let addPost = () => {
        let newMessage = refPost.current.value;
        props.addPost(newMessage);
    }

    let inputInTextareaText = (event) => {
        console.log(event);
        
        event.preventDefault();
        let message = props.posts.textMessage + event.key;
        props.editTextAreaPost(message);
        
    };
    
    return (
        <div className={s.myPost}>
            <div>
                My post
                <div>
                    <textarea ref={refPost}
                              onKeyDown={inputInTextareaText}
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