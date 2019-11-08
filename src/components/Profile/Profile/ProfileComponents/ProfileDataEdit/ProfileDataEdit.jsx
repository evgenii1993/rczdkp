import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../../../common/componentForm/componentForm';


let ProfileDataEdit = (props) => {
    let hasError = props.touch && props.error; 
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>About Me</b>
                <Field  name="aboutMe" 
                        component={renderInput}
                        type="text" />
            </div>
            <div>
                <b>facebook</b>
                <Field  name="contacts.facebook" 
                        component={renderInput}
                        type="text" />
            </div>
            <div>
                <b>github</b>
                <Field  name="contacts.github" 
                        component={renderInput} 
                        type="text" />
            </div>
            <div>
                <b>instagram</b>
                <Field  name="contacts.instagram" 
                        component={renderInput}
                        type="text" />
            </div>
            <div>
                <b>mainLink</b>
                <Field  name="contacts.mainLink" 
                        component={renderInput}
                        type="text" />
            </div>
            <div>
                <b>twitter</b>
                <Field  name="contacts.twitter" 
                        component={renderInput}
                        type="text" />
            </div>
            <div>
                <b>vk</b>
                <Field  name="contacts.vk" 
                        component={renderInput} 
                        type="text" />
            </div>
            <div>
                <b>website</b>
                <Field  name="contacts.website" 
                        component={renderInput} 
                        type="text" />
            </div>
            <div>
                <b>youtube</b>
                <Field  name="contacts.youtube" 
                        component={renderInput} 
                        type="text" />
            </div>
            <div>
                <b>lookingForAJob</b>
                <Field  name="lookingForAJob" 
                        component={renderInput} 
                        type="checkbox" />
            </div>
            <div>
                <b>lookingForAJobDescription</b>
                <Field  name="lookingForAJobDescription" 
                        component={renderInput}
                        type="text" />
            </div>
            <div>
                <b>fullName</b>
                <Field  name="fullName" 
                        component={renderInput}
                        type="text" />
            </div>
            { hasError && <div style={{color: "brown"}}>{props.error}</div> }
            <button type="submit">save</button>
        </form>
    );
}

ProfileDataEdit =  reduxForm({
    form: 'profileData'
})(ProfileDataEdit);

export default ProfileDataEdit