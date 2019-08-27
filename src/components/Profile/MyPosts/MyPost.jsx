import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import s from './MyPost.module.css';
import Post from './Post/Post';
import { renderTextarea } from '../../common/componentForm/componentForm';
import { required, maxLength } from '../../../utils/validation/validation';

const MyPost = (props) => {
    

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} countLike={post.countLike}/>);

    

    let addPostMessage = (postMessage) => {
        props.addPost(postMessage);
    };
 

    return (
        <div className={s.myPost}>
            <div>
                My post
                <div>
                    <ReduxAddPostMessageForm onSubmit={addPostMessage} />
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

const maxLength100 = maxLength(100);
const AddPostMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={renderTextarea} name="messagePost" type="text" validate={[required, maxLength100]}/>
            <button className="add post" >Add</button>
        </form>
    );
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('addPostMessage'));
}

const ReduxAddPostMessageForm = reduxForm({
    form: 'addPostMessage',
    onSubmitSuccess: afterSubmit,
})(AddPostMessageForm);


export default MyPost;