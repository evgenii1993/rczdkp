import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New posts
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 1
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;