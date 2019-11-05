import React from 'react';
import s from "./ProfileAvatar.module.css";
import avaPhoto from './../../../../../assets/avatar-man.png';


const ProfileAvatar = ({personInfo, setAvatar, isOwner}) => {
    let inputRef = React.createRef();

    const onChangeAvatarImage = (e) => {
        if (e.target.files.length) {
            setAvatar(e.target.files[0]);
        }
        inputRef.current.value = "";
    };
    return (
        <div>
            <div className={s.avatarWrapper}>
                <img
                    src={personInfo.photos.large !== null ?
                        personInfo.photos.large : avaPhoto
                    }
                    className={s.avatar}
                />
                {isOwner && <input type="file" onChange={onChangeAvatarImage} ref={inputRef}/>}
            </div>
        </div>
    );
}


export default ProfileAvatar;
