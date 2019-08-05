import React from "react";
import avaPhoto from './../../../assets/avatar-man.png';

const Profile = (props) => {
    return (
        <>
            <div>
                <img src={props.personInfo !== null ? 
                    props.personInfo.photos.large
                    :
                    avaPhoto
                } />
            </div>
            <div>
                ava + description
            </div>
        </>
    );
}

export default Profile;