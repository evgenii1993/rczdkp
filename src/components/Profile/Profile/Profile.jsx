import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileAvatar from "./ProfileComponents/ProfileAvatar/ProfileAvatar";
import ProfileData from "./ProfileComponents/ProfileData/ProfileData";
import ProfileDataEdit from "./ProfileComponents/ProfileDataEdit/ProfileDataEdit";


const Profile = (props) => {
    const setFormEdit = values => {
        console.log(values, "   values setFormEdit");
        props.updateDataProfile(values);
    }

    if (!props.personInfo) {
        return <Preloader />
    }


    return (      
        <section className={s.section}>
            <div className={s.leftPanel}>
                <ProfileAvatar personInfo={props.personInfo} setAvatar={props.setAvatar} isOwner={props.isOwner}/>
                <ProfileStatus status={props.status} id={props.personInfo.userId} getStatus={props.getStatus} updateStatus={props.updateStatus}/>
                
            </div>
            <div className={s.rightPanel}>
                { !props.editProfile ? <ProfileData {...props}/> : <ProfileDataEdit {...props} onSubmit={setFormEdit} initialValues={props.personInfo}/>}
            </div>

        </section>
    );
}

export default Profile;