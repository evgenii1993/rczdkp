import React  from 'react';
import { Redirect } from 'react-router';
import { connect } from "react-redux";

const mapStateToPropsRedirect = (state) => {
    return {
        auth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.auth) {
                return <Redirect to="/login" />
            }
            return (
                <Component {...this.props}/>
            )
        }
    }
    
    let withAuthRedirectInner = connect(mapStateToPropsRedirect)(RedirectComponent); 

    return  withAuthRedirectInner;
}
