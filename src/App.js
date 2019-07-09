import React from 'react';

import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <div className={s.content}>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;