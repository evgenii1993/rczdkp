import React, { Component }  from 'react';
import { Redirect } from 'react-dom';
import { connect } from "react-redux";

const mapStateToPropsRedirect = (state) => {
    return {
        auth: state.auth.isAuth
    }
}
 const withAuthRedirect = (Component) => {

    class RedirectComponent extends Component {
        render () {
            if (!this.props.auth) {
                return <Redirect to="/login" />
            }
            return (
                <Component {...this.props}/>
            )
        }
    }
    

    return connect(mapStateToPropsRedirect)(RedirectComponent); 
}
export default withAuthRedirect;