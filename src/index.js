
import './index.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let rerenderAllTree = () => {
    ReactDOM.render(<App state={store.getState()}   addPost={store.addPost.bind(store)} 
                                                    editTextAreaPost={store.editTextAreaPost.bind(store)} 
                                                    />, document.getElementById('root'));
}

store.subscribe(rerenderAllTree);
rerenderAllTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
