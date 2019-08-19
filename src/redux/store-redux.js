import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducerProfile from "./reducer-profile";
import reducerDialog from "./reducer-dialog";
import reducerNavbar from "./reducer-navBar";
import reducerFriend from "./reducer-friend";
import reducerAuth from "./reducer-auth";

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialog,
    navbarPage: reducerNavbar,
    friendPage: reducerFriend,
    auth: reducerAuth
});

let score = createStore(reducers, applyMiddleware(thunk));

export default score;