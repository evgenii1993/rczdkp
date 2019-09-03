import React, {Component} from 'react';

import s from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import { withRouter } from 'react-router';
import { compose } from "redux";
import { connect } from "react-redux";
import FriendsContainer from './components/Friends/FriendsContainer';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login  from './components/Login/Login';
import { initialApp } from './redux/reducer-app';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {
  componentDidMount () {
    this.props.initialApp();
  }
  render() {
    if (!this.props.initialSuccess) {
      return <Preloader />;
    }
    return (
      
        <div className={s.appWrapper}>
        
          <HeaderContainer />
          
          <Navbar/>
          <div className={s.content}>

            <Route exact path='/dialogs' render={() => <Dialogs/>} />
            <Route path='/profile/:idFriend?' render={() => <ProfileContainer  />} />
            <Route path='/friends' render={() => <FriendsContainer />} />
            <Route path='/setting' component={Setting} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/login' component={Login} />
          </div>

        </div>
      
    );
  }
}
let mapStateToProps = (state) => {
  return {
    initialSuccess: state.app.initialSuccess
  } 
} 
export default compose(
  withRouter,
  connect(mapStateToProps, { initialApp })
)(App);