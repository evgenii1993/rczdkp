import React from 'react';

import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import FriendsContainer from './components/Friends/FriendsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
      
        <Header />s
        
         <Navbar/>
        <div className={s.content}>

          <Route exact path='/dialogs' render={() => <Dialogs/>} />
          <Route path='/profile' render={() => <ProfileContainer  />} />
          <Route path='/friends' render={() => <FriendsContainer />} />
          <Route path='/setting' component={Setting} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;