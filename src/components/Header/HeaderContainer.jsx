import React, {Component} from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserData, toggleIsFetching } from './../../redux/reducer-auth';
import Preloader from '../common/Preloader/Preloader';

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                let {id, login, email} = response.data.data;
                this.props.setUserData(id, email, login);
                this.props.toggleIsFetching(true);
            })
    }
    render() {
        
        return <>
            {this.props.isFetching ? 
                <Header {...this.props}/> 
                :
                <Preloader />}
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