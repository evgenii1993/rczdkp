import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let friends = [
    {id: "1", name: "Egor"},
    {id: "2", name: "Oksana"},
    {id: "3", name: "Galina"},
    {id: "4", name: "Oleg"}
];
let messages = [
    {text: "Hi"},
    {text: "Hi!"},
    {text: "I'm smart man and i get everything"}
];
let posts = [
    {message: "Hi!", countLike: "12"},
    {message: "Hi?", countLike: "2"},
    {message: "J_J", countLike: "1"},
    {message: "J_J", countLike: "3"}
];


ReactDOM.render(<App friends={friends} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
