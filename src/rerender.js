import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, editTextAreaPost, clearInputPost } from './redux/state';


let rerender = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={addPost} 
                         clearInputPost={clearInputPost}
                         editTextAreaPost={editTextAreaPost} />, document.getElementById('root'));
}

export default rerender;