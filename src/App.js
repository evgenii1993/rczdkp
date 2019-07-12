import React from 'react';

import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
      
        <Header />
        <Navbar friends={props.state.navbarPage.friends}/>
        <div className={s.content}>

          <Route exact path='/dialogs' render={() => <Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs}/>} />
          <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path='/setting' component={Setting} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;