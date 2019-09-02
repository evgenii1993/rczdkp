import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import { postAuth } from '../../redux/reducer-auth';


const LoginForm = (props) => {

    


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="email">Логин</label>
                <Field name="email" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <Field name="password" component="input" type="password"/>
            </div>
            <div>
                <label htmlFor="rememberMe">Запомнить меня</label>
                <Field name="rememberMe" component="input" type="checkbox"/>
            </div>
            <button type="submit">Enter</button>
            <button type="button" onClick={props.reset}>Reset</button>
        </form>
    );
}
const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm);


const Login = (props) => {
    let onPostAuth = (values) => {
        props.postAuth(values);        
    } 
    if (props.isAuth) {
        return <Redirect to="/profile" />;
    }
    return (
        <>
            <h2>Login !!!</h2>
            <LoginFormRedux onSubmit={onPostAuth}/>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {postAuth})(Login);