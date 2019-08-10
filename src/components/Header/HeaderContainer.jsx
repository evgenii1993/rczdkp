import React, {Component} from 'react';
import Header from './Header';
import { authAPI } from './../../api/authAPI';
import { connect } from 'react-redux';
import { setUserData, toggleIsFetching } from './../../redux/reducer-auth';

class HeaderContainer extends Component {
    componentDidMount() {
        
        authAPI.getAuthMe()
            .then((response) => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setUserData(id, email, login);
                }
            })
    }
    render() {
        
        return <>      
                <Header {...this.props}/> 
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}


export default connect(mapStateToProps, { setUserData, toggleIsFetching } )(HeaderContainer);