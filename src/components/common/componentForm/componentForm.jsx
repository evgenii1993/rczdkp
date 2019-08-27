import React from 'react';
import s from './componentForm.module.css';

export const ComponentForm = ({ label, meta, ...restProps }) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <label>{label}</label>
            <div className={hasError ? s.errorField : ''}>
                <div>
                    {restProps.children}  
                </div>
                {hasError && <span className={s.error}>{meta.error}</span>}
            </div>
        </div>
    );
} 

export const renderTextarea = (props) => {
    let {input, type, ...restProps} = props;
    return (
        <ComponentForm {...restProps}>
            <textarea {...input} type={type}/>
        </ComponentForm>
    );
}

export const renderInput = (props) => {
    let {input, type, ...restProps} = props;
    return (
        <ComponentForm {...restProps}>
            <input {...input} type={type}/>
        </ComponentForm>
    );
}

