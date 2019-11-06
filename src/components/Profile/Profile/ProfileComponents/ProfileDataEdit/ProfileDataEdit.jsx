import React from 'react';
import { Field, reduxForm } from 'redux-form';


let ProfileDataEdit = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>About Me</b>
                <Field  name="aboutMe" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>facebook</b>
                <Field  name="contacts.facebook" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>github</b>
                <Field  name="contacts.github" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>instagram</b>
                <Field  name="contacts.instagram" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>mainLink</b>
                <Field  name="contacts.mainLink" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>twitter</b>
                <Field  name="contacts.twitter" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>vk</b>
                <Field  name="contacts.vk" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>website</b>
                <Field  name="contacts.website" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>youtube</b>
                <Field  name="contacts.youtube" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>lookingForAJob</b>
                <Field  name="lookingForAJob" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>lookingForAJobDescription</b>
                <Field  name="lookingForAJobDescription" 
                        component="input" 
                        type="text" />
            </div>
            <div>
                <b>fullName</b>
                <Field  name="fullName" 
                        component="input" 
                        type="text" />
            </div>
            <button type="submit">save</button>
        </form>
    );
}

ProfileDataEdit =  reduxForm({
    form: 'profileData'
})(ProfileDataEdit);

export default ProfileDataEdit