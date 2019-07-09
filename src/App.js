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

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>

        <Header />
        <Navbar />
        <div className={s.content}>

          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/setting' component={Setting} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />

        </div>

      </div>
    </BrowserRouter >
  );
}

export default App;