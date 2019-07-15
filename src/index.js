
import './index.css';

import state, {subscribe} from './redux/state';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, editTextAreaPost, clearInputPost } from './redux/state';

let rerenderAllTree = () => {
    ReactDOM.render(<App state={state}
                         addPost={addPost} 
                         clearInputPost={clearInputPost}
                         editTextAreaPost={editTextAreaPost} />, document.getElementById('root'));
}

rerenderAllTree();
subscribe(rerenderAllTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
