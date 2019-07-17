import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPosts/MyPost';
import MyPostContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
    
    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                <MyPostContainer {...props}/>
            </div>
        </div>
    );
}

export default Profile;