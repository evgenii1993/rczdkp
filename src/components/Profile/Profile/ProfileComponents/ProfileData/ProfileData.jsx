import React from 'react';
import s from './ProfileData.module.css';

const ProfileData = (props) => {
    
    return (
        <>
            { props.isOwner && <button onClick={() => props.setEditProfile(true)}>edit mode</button> }
            <h3>{props.personInfo.fullName}</h3>
            <div className="row">
                <div className="col-md-1">
                    {props.personInfo.lookingForAJob ? 
                        <img src={require(`./../../../../../assets/iconSet/icon-like.png`)}/> 
                            : 
                        <img src={require(`./../../../../../assets/iconSet/icon-unlike.png`)}/>
                    }
                </div>
                <div className="col-md-11">
                    {props.personInfo.lookingForAJobDescription}
                </div>
                <div className={s.aboutMe}>{props.personInfo.aboutMe}</div>
            </div>
        </>
    );
}

export default ProfileData;
