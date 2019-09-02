import React, {Component} from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { toggleIsFetching, getAuth, logoutUser } from './../../redux/reducer-auth';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuth();
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


export default connect(mapStateToProps, {  toggleIsFetching, getAuth, logoutUser } )(HeaderContainer);