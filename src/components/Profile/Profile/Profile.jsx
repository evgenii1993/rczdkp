import React from "react";
import avaPhoto from './../../../assets/avatar-man.png';
import Preloader from "../../common/Preloader/Preloader";
import s from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus";



const Profile = (props) => {
    if (!props.personInfo) {
        return <Preloader />
    }
    
    
    let listIcons = Object.entries(props.personInfo.contacts).map(([key, value], index) => {
        return value ? <a   href={value.startsWith("http://") || value.startsWith("https://") ? value : `http://${value}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={s.linkIcon} 
                            key={index}>
            <img src={require(`./../../../assets/iconSet/icon-${key}.png`)} className={s.imageIcon} alt="" />
        </a> : '';
    });


    return (      
        <section className={s.section}>
            <div className={s.leftPanel}>
                <div className={s.avatarWrapper}>
                    <img
                        src={props.personInfo.photos.large !== null ?
                            props.personInfo.photos.large : avaPhoto
                        }
                        className={s.avatar}
                    />
                </div>
                <ProfileStatus status={props.status} id={props.personInfo.userId} getStatus={props.getStatus} updateStatus={props.updateStatus}/>
                <div className={s.listLink}>
                    {listIcons}
                </div>
                <div className={s.aboutMe}>{props.personInfo.aboutMe}</div>
            </div>
            <div className={s.rightPanel}>
                <h3>{props.personInfo.fullName}</h3>
                <div className="row">
                    <div className="col-md-1">
                        {props.personInfo.lookingForAJob ? 
                            <img src={require(`./../../../assets/iconSet/icon-like.png`)}/> 
                                : 
                            <img src={require(`./../../../assets/iconSet/icon-unlike.png`)}/>
                        }
                    </div>
                    <div className="col-md-11">
                        {props.personInfo.lookingForAJobDescription}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Profile;